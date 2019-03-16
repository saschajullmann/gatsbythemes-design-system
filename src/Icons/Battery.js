import React from 'react'
import Svg from './Svg'
export const SvgBattery = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="battery_svg__feather battery_svg__feather-battery"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
    <path d="M23 13v-2" />
  </Svg>
)
SvgBattery.isIcon = true
SvgBattery.defaultProps = {
  size: 24
}
export default SvgBattery
