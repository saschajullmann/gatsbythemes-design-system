import React from 'react'
import Svg from './Svg'
export const SvgCheckSquare = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check-square_svg__feather check-square_svg__feather-check-square"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </Svg>
)
SvgCheckSquare.isIcon = true
SvgCheckSquare.defaultProps = {
  size: 24
}
export default SvgCheckSquare
