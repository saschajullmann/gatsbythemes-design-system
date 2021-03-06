import React from 'react'
import Svg from './Svg'
export const SvgXSquare = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="x-square_svg__feather x-square_svg__feather-x-square"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M9 9l6 6M15 9l-6 6" />
  </Svg>
)
SvgXSquare.isIcon = true
SvgXSquare.defaultProps = {
  size: 24
}
export default SvgXSquare
