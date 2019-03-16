import React from 'react'
import Svg from './Svg'
export const SvgWifi = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="wifi_svg__feather wifi_svg__feather-wifi"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h0" />
  </Svg>
)
SvgWifi.isIcon = true
SvgWifi.defaultProps = {
  size: 24
}
export default SvgWifi
