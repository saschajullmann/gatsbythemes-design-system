import React from 'react'
import Svg from './Svg'
export const SvgTriangle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="triangle_svg__feather triangle_svg__feather-triangle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
  </Svg>
)
SvgTriangle.isIcon = true
SvgTriangle.defaultProps = {
  size: 24
}
export default SvgTriangle
