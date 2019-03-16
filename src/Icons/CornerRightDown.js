import React from 'react'
import Svg from './Svg'
export const SvgCornerRightDown = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-right-down_svg__feather corner-right-down_svg__feather-corner-right-down"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M10 15l5 5 5-5" />
    <path d="M4 4h7a4 4 0 0 1 4 4v12" />
  </Svg>
)
SvgCornerRightDown.isIcon = true
SvgCornerRightDown.defaultProps = {
  size: 24
}
export default SvgCornerRightDown
