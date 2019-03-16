import React from 'react'
import renderer from 'react-test-renderer'
import { Card, theme } from '../src'

describe('Card', () => {
  test('renders small box shadow with default border', () => {
    const json = renderer.create(<Card boxShadowSize="sm" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)'
    )
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders medium box shadow with default border', () => {
    const json = renderer.create(<Card boxShadowSize="md" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)'
    )
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders large box shadow with default border', () => {
    const json = renderer.create(<Card boxShadowSize="lg" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)'
    )
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders xlarge box shadow with default border', () => {
    const json = renderer.create(<Card boxShadowSize="xl" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)'
    )
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders medium box shadow with specified borderWidth', () => {
    const json = renderer
      .create(<Card borderWidth={2} boxShadowSize="md" />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'border',
      `2px solid ${theme.colors.borderGray}`
    )
    expect(json).toHaveStyleRule('border-radius', theme.radius)
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)'
    )
  })

  test('renders medium box shadow with specified borderRadius', () => {
    const json = renderer
      .create(<Card borderRadius={0} boxShadowSize="md" />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
    expect(json).toHaveStyleRule('border-radius', '0px')
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)'
    )
  })

  test('renders border 0 without warning', () => {
    console.error = jest.fn()
    const json = renderer.create(<Card borderWidth={0} />).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border', '0')

    expect(
      console.error.mock.calls
        .toString()
        .indexOf(
          `Failed prop type: Invalid prop 'borderWidth' of value '0' supplied to 'Card', expected one of [1,2].`
        ) === -1
    )

    console.error.mockRestore()
  })
})
