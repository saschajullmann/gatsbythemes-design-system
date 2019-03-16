import React from 'react'
import Svg from './Svg'
export const SvgCornerLeftDown = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-left-down_svg__feather corner-left-down_svg__feather-corner-left-down"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M14 15l-5 5-5-5" />
    <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
  </Svg>
)
SvgCornerLeftDown.isIcon = true
SvgCornerLeftDown.defaultProps = {
  size: 24
}
export default SvgCornerLeftDown
