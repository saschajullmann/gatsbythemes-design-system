import React from 'react'
import Svg from './Svg'
export const SvgCornerDownRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-down-right_svg__feather corner-down-right_svg__feather-corner-down-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M15 10l5 5-5 5" />
    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
  </Svg>
)
SvgCornerDownRight.isIcon = true
SvgCornerDownRight.defaultProps = {
  size: 24
}
export default SvgCornerDownRight
