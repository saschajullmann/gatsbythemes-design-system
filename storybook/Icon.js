import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Truncate, Icon } from '../src'
import * as icons from '../src/Icons'

const keys = Object.keys(icons)

storiesOf('Icon', module)
  .add('Icons', () => (
    <Box p={2} color="white">
      <Flex wrap>
        <Box key={name} width={[1 / 3, 1 / 5, 1 / 6, 1 / 8]} mx={2} my={3}>
          <Icon name="Youtube" color="red" size={32} />
          <Truncate fontSize={0}>{name}</Truncate>
        </Box>
      </Flex>
    </Box>
  ))
  .add('Color', () => (
    <div>
      <Icon color="blue" size={48} m={2} name="Flights" />
      <Icon color="green" size={48} m={2} name="Hotels" />
      <Icon color="orange" size={48} m={2} name="Cars" />
    </div>
  ))
