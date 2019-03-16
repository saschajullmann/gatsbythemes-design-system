import React from 'react'
import Svg from './Svg'
export const SvgMapPin = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="map-pin_svg__feather map-pin_svg__feather-map-pin"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx={12} cy={10} r={3} />
  </Svg>
)
SvgMapPin.isIcon = true
SvgMapPin.defaultProps = {
  size: 24
}
export default SvgMapPin
