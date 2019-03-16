import React from 'react'
import Svg from './Svg'
export const SvgSunrise = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="sunrise_svg__feather sunrise_svg__feather-sunrise"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 18a5 5 0 0 0-10 0M12 2v7M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M8 6l4-4 4 4" />
  </Svg>
)
SvgSunrise.isIcon = true
SvgSunrise.defaultProps = {
  size: 24
}
export default SvgSunrise
