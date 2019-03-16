import React from 'react'
import Svg from './Svg'
export const SvgPower = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="power_svg__feather power_svg__feather-power"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10" />
  </Svg>
)
SvgPower.isIcon = true
SvgPower.defaultProps = {
  size: 24
}
export default SvgPower
