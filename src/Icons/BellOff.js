import React from 'react'
import Svg from './Svg'
export const SvgBellOff = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bell-off_svg__feather bell-off_svg__feather-bell-off"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13.73 21a2 2 0 0 1-3.46 0M18.63 13A17.89 17.89 0 0 1 18 8M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14M18 8a6 6 0 0 0-9.33-5M1 1l22 22" />
  </Svg>
)
SvgBellOff.isIcon = true
SvgBellOff.defaultProps = {
  size: 24
}
export default SvgBellOff
