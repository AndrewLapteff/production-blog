/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')

const slices = ['shared']

const paths = {
  shared: 'shared/ui'
}

if (process.argv < 2) return
const slice = process.argv[2]
const sliceName = process.argv[3]

if (!slices.includes(slice)) return

const pathToTheSlice = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  paths[slice],
  sliceName
)

fs.mkdir(pathToTheSlice, (err) => {
  if (err) console.log(err)
})

const index = path.resolve(pathToTheSlice, 'index.ts')

fs.writeFile(index, 'const a = 1', (err) => {
  if (err) console.log(err)
})
