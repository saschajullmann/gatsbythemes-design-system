import React from 'react'
import Svg from './Svg'
export const SvgType = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="type_svg__feather type_svg__feather-type"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 7V4h16v3M9 20h6M12 4v16" />
  </Svg>
)
SvgType.isIcon = true
SvgType.defaultProps = {
  size: 24
}
export default SvgType
