import React from 'react'
import Svg from './Svg'
export const SvgChevronsRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevrons-right_svg__feather chevrons-right_svg__feather-chevrons-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
  </Svg>
)
SvgChevronsRight.isIcon = true
SvgChevronsRight.defaultProps = {
  size: 24
}
export default SvgChevronsRight
