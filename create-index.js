const fs = require('fs')
const path = require('path')

const dirname = path.join(__dirname, './src/Icons')
const icons = fs
    .readdirSync(dirname)
    .filter(filename => /\.js$/.test(filename))
    .map(filename => path.basename(filename, '.js'))

const template = icons =>
    icons.map(name => `export { default as ${name} } from './${name}'`).join('\n')

const content = template(icons)
const filename = path.join(__dirname, './src/Icons/index.js')

fs.writeFileSync(filename, content)