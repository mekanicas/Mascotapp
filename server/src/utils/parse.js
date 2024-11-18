// Modules
import path from 'node:path'

// Methods
export default async function parseRouter(basedir, filePath) {
  let relativePath = path.relative(basedir, filePath).split('.js').join('')
  let route = relativePath.split('index').join('')

  return route
}
