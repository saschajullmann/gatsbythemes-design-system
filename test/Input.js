import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from '../src'

const id = 'fake-test-id'

describe('Input', () => {
  test('it renders', () => {
    const json = renderer.create(<Input id={id} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a red border with a color prop is passed', () => {
    const json = renderer.create(<Input id={id} color="red" />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a really large padding and margin', () => {
    const json = renderer.create(<Input id={id} p={4} m={4} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with large text', () => {
    const json = renderer.create(<Input id={id} fontSize={4} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
