import React from 'react'
import Svg from './Svg'
export const SvgArrowUpRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-up-right_svg__feather arrow-up-right_svg__feather-arrow-up-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7 17L17 7M7 7h10v10" />
  </Svg>
)
SvgArrowUpRight.isIcon = true
SvgArrowUpRight.defaultProps = {
  size: 24
}
export default SvgArrowUpRight
