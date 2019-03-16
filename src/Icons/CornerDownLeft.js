import React from 'react'
import Svg from './Svg'
export const SvgCornerDownLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-down-left_svg__feather corner-down-left_svg__feather-corner-down-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9 10l-5 5 5 5" />
    <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  </Svg>
)
SvgCornerDownLeft.isIcon = true
SvgCornerDownLeft.defaultProps = {
  size: 24
}
export default SvgCornerDownLeft
