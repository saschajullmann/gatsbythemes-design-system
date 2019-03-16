import React from 'react'
import Svg from './Svg'
export const SvgPlus = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="plus_svg__feather plus_svg__feather-plus"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 5v14M5 12h14" />
  </Svg>
)
SvgPlus.isIcon = true
SvgPlus.defaultProps = {
  size: 24
}
export default SvgPlus
