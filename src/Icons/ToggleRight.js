import React from 'react'
import Svg from './Svg'
export const SvgToggleRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="toggle-right_svg__feather toggle-right_svg__feather-toggle-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
    <circle cx={16} cy={12} r={3} />
  </Svg>
)
SvgToggleRight.isIcon = true
SvgToggleRight.defaultProps = {
  size: 24
}
export default SvgToggleRight
