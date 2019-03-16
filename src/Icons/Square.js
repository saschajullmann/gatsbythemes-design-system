import React from 'react'
import Svg from './Svg'
export const SvgSquare = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="square_svg__feather square_svg__feather-square"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
  </Svg>
)
SvgSquare.isIcon = true
SvgSquare.defaultProps = {
  size: 24
}
export default SvgSquare
