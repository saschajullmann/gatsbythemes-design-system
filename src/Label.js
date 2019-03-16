import styled from '@emotion/styled'
import { space, fontSize, fontWeight, color } from 'styled-system'
import theme from './theme'

const nowrap = props =>
  props.nowrap
    ? {
        whiteSpace: 'nowrap'
      }
    : null

const accessiblyHide = props =>
  props.hidden
    ? {
        position: 'absolute',
        width: '1px',
        height: '1px',
        clip: 'rect(1px, 1px, 1px, 1px)'
      }
    : null

const Label = styled.label`
  font-size: 10px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  margin: 0;

  ${space} ${fontSize} ${color} ${fontWeight};
  ${nowrap}
  ${accessiblyHide}
`

Label.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes
}

Label.defaultProps = {
  fontSize: '10px',
  fontWeight: 'bold',
  color: 'gray',
  theme: theme
}

Label.displayName = 'Label'
Label.isLabel = true

export default Label
