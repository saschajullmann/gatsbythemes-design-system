import React from 'react'
import Svg from './Svg'
export const SvgToggleLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="toggle-left_svg__feather toggle-left_svg__feather-toggle-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
    <circle cx={8} cy={12} r={3} />
  </Svg>
)
SvgToggleLeft.isIcon = true
SvgToggleLeft.defaultProps = {
  size: 24
}
export default SvgToggleLeft
