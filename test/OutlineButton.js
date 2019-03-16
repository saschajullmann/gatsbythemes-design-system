import React from 'react'
import renderer from 'react-test-renderer'
import { OutlineButton, theme } from '../src'

describe('OutlineButton', () => {
  test('renders', () => {
    const json = renderer.create(<OutlineButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<OutlineButton disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('without disabled prop sets', () => {
    const json = renderer.create(<OutlineButton />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue, {
      modifier: ':hover'
    })
  })
})
