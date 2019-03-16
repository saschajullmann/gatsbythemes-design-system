import React from 'react'
import Svg from './Svg'
export const SvgChevronDown = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevron-down_svg__feather chevron-down_svg__feather-chevron-down"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6 9l6 6 6-6" />
  </Svg>
)
SvgChevronDown.isIcon = true
SvgChevronDown.defaultProps = {
  size: 24
}
export default SvgChevronDown
