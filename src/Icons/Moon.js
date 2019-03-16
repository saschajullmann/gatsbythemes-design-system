import React from 'react'
import Svg from './Svg'
export const SvgMoon = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="moon_svg__feather moon_svg__feather-moon"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Svg>
)
SvgMoon.isIcon = true
SvgMoon.defaultProps = {
  size: 24
}
export default SvgMoon
