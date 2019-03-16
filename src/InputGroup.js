import styled from '@emotion/styled'
import { space, borderColor, themeGet } from 'styled-system'
import theme from './theme'
import Box from './Box'
import Input from './Input'

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;
  ${borderColor}
  ${space}

  & > ${Box} {
    width: 100%;
    flex: 1 1 auto;
  }

  & ${Input} {
    border: 0;
    box-shadow: none;
  }
`

InputGroup.propTypes = {
  ...space.propTypes,
  ...borderColor.propTypes
}

InputGroup.defaultProps = {
  theme,
  borderColor: 'borderGray'
}

export default InputGroup
