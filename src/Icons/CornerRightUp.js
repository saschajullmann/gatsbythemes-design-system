import React from 'react'
import Svg from './Svg'
export const SvgCornerRightUp = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-right-up_svg__feather corner-right-up_svg__feather-corner-right-up"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M10 9l5-5 5 5" />
    <path d="M4 20h7a4 4 0 0 0 4-4V4" />
  </Svg>
)
SvgCornerRightUp.isIcon = true
SvgCornerRightUp.defaultProps = {
  size: 24
}
export default SvgCornerRightUp
