const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const fileSize = require('rollup-plugin-filesize')

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    commonjs(),
    json(),
    resolve(),
    fileSize()
  ],
  external: [
    '@emotion/core',
    '@emotion/styled',
    'react',
    'react-dom',
    'prop-types',
    'styled-system'
  ]
}
