import React from 'react'
import Svg from './Svg'
export const SvgCode = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="code_svg__feather code_svg__feather-code"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </Svg>
)
SvgCode.isIcon = true
SvgCode.defaultProps = {
  size: 24
}
export default SvgCode
