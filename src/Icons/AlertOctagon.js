import React from 'react'
import Svg from './Svg'
export const SvgAlertOctagon = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="alert-octagon_svg__feather alert-octagon_svg__feather-alert-octagon"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4M12 16h0" />
  </Svg>
)
SvgAlertOctagon.isIcon = true
SvgAlertOctagon.defaultProps = {
  size: 24
}
export default SvgAlertOctagon
