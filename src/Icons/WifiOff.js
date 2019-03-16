import React from 'react'
import Svg from './Svg'
export const SvgWifiOff = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="wifi-off_svg__feather wifi-off_svg__feather-wifi-off"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h0" />
  </Svg>
)
SvgWifiOff.isIcon = true
SvgWifiOff.defaultProps = {
  size: 24
}
export default SvgWifiOff
