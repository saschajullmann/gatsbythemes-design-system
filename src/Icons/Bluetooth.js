import React from 'react'
import Svg from './Svg'
export const SvgBluetooth = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bluetooth_svg__feather bluetooth_svg__feather-bluetooth"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" />
  </Svg>
)
SvgBluetooth.isIcon = true
SvgBluetooth.defaultProps = {
  size: 24
}
export default SvgBluetooth
