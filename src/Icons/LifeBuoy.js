import React from 'react'
import Svg from './Svg'
export const SvgLifeBuoy = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="life-buoy_svg__feather life-buoy_svg__feather-life-buoy"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={4} />
    <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.53M4.93 19.07l4.24-4.24" />
  </Svg>
)
SvgLifeBuoy.isIcon = true
SvgLifeBuoy.defaultProps = {
  size: 24
}
export default SvgLifeBuoy
