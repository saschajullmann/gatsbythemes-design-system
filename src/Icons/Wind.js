import React from 'react'
import Svg from './Svg'
export const SvgWind = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="wind_svg__feather wind_svg__feather-wind"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
  </Svg>
)
SvgWind.isIcon = true
SvgWind.defaultProps = {
  size: 24
}
export default SvgWind
