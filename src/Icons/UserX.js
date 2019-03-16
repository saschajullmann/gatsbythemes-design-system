import React from 'react'
import Svg from './Svg'
export const SvgUserX = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="user-x_svg__feather user-x_svg__feather-user-x"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={8.5} cy={7} r={4} />
    <path d="M18 8l5 5M23 8l-5 5" />
  </Svg>
)
SvgUserX.isIcon = true
SvgUserX.defaultProps = {
  size: 24
}
export default SvgUserX
