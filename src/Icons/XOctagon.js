import React from 'react'
import Svg from './Svg'
export const SvgXOctagon = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="x-octagon_svg__feather x-octagon_svg__feather-x-octagon"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6M9 9l6 6" />
  </Svg>
)
SvgXOctagon.isIcon = true
SvgXOctagon.defaultProps = {
  size: 24
}
export default SvgXOctagon
