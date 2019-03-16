import React from 'react'
import Svg from './Svg'
export const SvgTruck = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="truck_svg__feather truck_svg__feather-truck"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx={5.5} cy={18.5} r={2.5} />
    <circle cx={18.5} cy={18.5} r={2.5} />
  </Svg>
)
SvgTruck.isIcon = true
SvgTruck.defaultProps = {
  size: 24
}
export default SvgTruck
