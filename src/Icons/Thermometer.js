import React from 'react'
import Svg from './Svg'
export const SvgThermometer = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="thermometer_svg__feather thermometer_svg__feather-thermometer"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </Svg>
)
SvgThermometer.isIcon = true
SvgThermometer.defaultProps = {
  size: 24
}
export default SvgThermometer
