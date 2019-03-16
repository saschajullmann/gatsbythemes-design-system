import React from 'react'
import Svg from './Svg'
export const SvgShield = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shield_svg__feather shield_svg__feather-shield"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Svg>
)
SvgShield.isIcon = true
SvgShield.defaultProps = {
  size: 24
}
export default SvgShield
