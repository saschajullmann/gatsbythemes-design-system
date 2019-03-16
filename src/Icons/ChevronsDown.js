import React from 'react'
import Svg from './Svg'
export const SvgChevronsDown = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevrons-down_svg__feather chevrons-down_svg__feather-chevrons-down"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
  </Svg>
)
SvgChevronsDown.isIcon = true
SvgChevronsDown.defaultProps = {
  size: 24
}
export default SvgChevronsDown
