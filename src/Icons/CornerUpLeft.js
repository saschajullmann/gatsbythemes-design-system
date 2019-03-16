import React from 'react'
import Svg from './Svg'
export const SvgCornerUpLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-up-left_svg__feather corner-up-left_svg__feather-corner-up-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9 14L4 9l5-5" />
    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  </Svg>
)
SvgCornerUpLeft.isIcon = true
SvgCornerUpLeft.defaultProps = {
  size: 24
}
export default SvgCornerUpLeft
