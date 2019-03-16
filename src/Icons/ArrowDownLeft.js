import React from 'react'
import Svg from './Svg'
export const SvgArrowDownLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-down-left_svg__feather arrow-down-left_svg__feather-arrow-down-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 7L7 17M17 17H7V7" />
  </Svg>
)
SvgArrowDownLeft.isIcon = true
SvgArrowDownLeft.defaultProps = {
  size: 24
}
export default SvgArrowDownLeft
