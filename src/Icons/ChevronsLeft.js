import React from 'react'
import Svg from './Svg'
export const SvgChevronsLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevrons-left_svg__feather chevrons-left_svg__feather-chevrons-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
  </Svg>
)
SvgChevronsLeft.isIcon = true
SvgChevronsLeft.defaultProps = {
  size: 24
}
export default SvgChevronsLeft
