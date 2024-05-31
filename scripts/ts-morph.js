// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Project, SyntaxKind } = require('ts-morph')

const featureNameToDelete = process.argv[2] // article
const featureMode = process.argv[3] // on or off

if (!featureNameToDelete || !featureMode) {
  console.error('Please provide the feature name and mode')
  process.exit(1)
}

if (featureMode !== 'on' && featureMode !== 'off') {
  console.error('Please provide the correct mode')
  process.exit(1)
}

const project = new Project()

project.addSourceFilesAtPaths('src/**/*.tsx')

function isToggleFunction(node) {
  let isToggleFunction = false

  // loop through the children of the node
  node.forEachChild((child) => {
    // check if the child is an identifier and the text is toggleFeature
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === 'toggleFeature'
    ) {
      isToggleFunction = true
    }
  })
  return isToggleFunction
}

// loop through all the source files
project.getSourceFiles().forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    // check if the node is a call expression and the function is toggleFeature
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression
      ) // get the object options
      if (!objectOptions) {
        return
      }

      // get the name properties
      const featureNameNode = objectOptions.getProperty('name')
      const on = objectOptions.getProperty('on')
      const off = objectOptions.getProperty('off')

      const featureName = featureNameNode
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1)
      const onFunction = on?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
      const offFunction = off?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
      )

      // console.log(featureName.getText()) // name: 'article'
      // console.log(name) // article
      // console.log(onFunction.getText()) // () => console.log('article on')

      if (featureName !== featureNameToDelete) return
      if (featureMode === 'on') {
        node.replaceWithText(onFunction.getText()) // replace the node with the on function
      }
      if (featureMode === 'off') {
        node.replaceWithText(offFunction.getText()) // replace the node with the off function
      }
    }
  })
})

project.save()
