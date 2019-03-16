import styled from '@emotion/styled'
import theme from './theme'
import { space, width, borderColor } from 'styled-system'

const Divider = styled.hr`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  ${space} ${width} ${borderColor};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
  borderColor: 'borderGray',
  theme: theme,
  ml: 0,
  mr: 0
}

Divider.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...borderColor.propTypes
}

export default Divider
