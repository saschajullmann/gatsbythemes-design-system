import React from 'react'
import Svg from './Svg'
export const SvgArrowUpLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-up-left_svg__feather arrow-up-left_svg__feather-arrow-up-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 17L7 7M7 17V7h10" />
  </Svg>
)
SvgArrowUpLeft.isIcon = true
SvgArrowUpLeft.defaultProps = {
  size: 24
}
export default SvgArrowUpLeft
