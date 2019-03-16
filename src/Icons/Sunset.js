import React from 'react'
import Svg from './Svg'
export const SvgSunset = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="sunset_svg__feather sunset_svg__feather-sunset"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 18a5 5 0 0 0-10 0M12 9V2M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M16 5l-4 4-4-4" />
  </Svg>
)
SvgSunset.isIcon = true
SvgSunset.defaultProps = {
  size: 24
}
export default SvgSunset
