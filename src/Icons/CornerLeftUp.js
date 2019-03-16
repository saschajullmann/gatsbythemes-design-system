import React from 'react'
import Svg from './Svg'
export const SvgCornerLeftUp = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-left-up_svg__feather corner-left-up_svg__feather-corner-left-up"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M14 9L9 4 4 9" />
    <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
  </Svg>
)
SvgCornerLeftUp.isIcon = true
SvgCornerLeftUp.defaultProps = {
  size: 24
}
export default SvgCornerLeftUp
