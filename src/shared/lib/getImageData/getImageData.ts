interface Props {
  width: number
  height: number
}

export async function getImageSize(url: string): Promise<Props> {
  return await new Promise<Props>((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({ width: img.width, height: img.height })
    }
    img.onerror = (error) => {
      reject(error)
    }
    img.src = url
  })
}
