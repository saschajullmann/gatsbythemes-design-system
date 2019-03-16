import React from 'react'
import Svg from './Svg'
export const SvgOctagon = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="octagon_svg__feather octagon_svg__feather-octagon"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z" />
  </Svg>
)
SvgOctagon.isIcon = true
SvgOctagon.defaultProps = {
  size: 24
}
export default SvgOctagon
