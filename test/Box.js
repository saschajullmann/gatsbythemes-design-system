import React from 'react'
import renderer from 'react-test-renderer'
import { Box, theme } from '../src'

describe('Box', () => {
  test('renders', () => {
    const json = renderer.create(<Box />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('width prop sets width', () => {
    const json = renderer.create(<Box width={1 / 2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '50%')
  })

  test('m prop sets margin', () => {
    const json = renderer.create(<Box m={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', theme.space[2] + 'px')
  })

  test('p prop sets padding', () => {
    const json = renderer.create(<Box p={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('padding', theme.space[2] + 'px')
  })

  test('color prop sets color', () => {
    const json = renderer.create(<Box color="blue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('bg prop sets background color', () => {
    const json = renderer.create(<Box bg="green" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
  })

  test('align prop triggers warning', () => {
    console.error = jest.fn()

    const json = renderer.create(<Box align="center" />).toJSON()

    expect(
      console.error.mock.calls
        .toString()
        .indexOf(
          'The Box `align` prop will deprecated. Please use Text instead.'
        ) !== -1
    )
    console.error.mockRestore()
  })
})
