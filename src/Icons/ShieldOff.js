import React from 'react'
import Svg from './Svg'
export const SvgShieldOff = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shield-off_svg__feather shield-off_svg__feather-shield-off"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38M1 1l22 22" />
  </Svg>
)
SvgShieldOff.isIcon = true
SvgShieldOff.defaultProps = {
  size: 24
}
export default SvgShieldOff
