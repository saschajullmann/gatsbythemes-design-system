import React from 'react'
import Svg from './Svg'
export const SvgCornerUpRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-up-right_svg__feather corner-up-right_svg__feather-corner-up-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M15 14l5-5-5-5" />
    <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
  </Svg>
)
SvgCornerUpRight.isIcon = true
SvgCornerUpRight.defaultProps = {
  size: 24
}
export default SvgCornerUpRight
