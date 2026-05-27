const imageModules = import.meta.glob('/public/images/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function normalizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getBaseName(path) {
  return path.split('/').pop() || ''
}

const imageMap = Object.entries(imageModules).reduce((acc, [path, url]) => {
  const normalized = normalizeFileName(getBaseName(path))
  acc[normalized] = url
  return acc
}, {})

export function getDiscoveredImages() {
  return Object.entries(imageMap).map(([name, url]) => ({
    name,
    url,
  }))
}

export function resolveProjectImage(imageName, title) {
  const normalizedImageName = imageName ? normalizeFileName(imageName) : ''
  const normalizedTitle = normalizeFileName(title)

  return (
    imageMap[normalizedImageName] ||
    imageMap[normalizedTitle] ||
    '/images/fallback-project.svg'
  )
}
