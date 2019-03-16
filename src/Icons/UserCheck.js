import React from 'react'
import Svg from './Svg'
export const SvgUserCheck = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="user-check_svg__feather user-check_svg__feather-user-check"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={8.5} cy={7} r={4} />
    <path d="M17 11l2 2 4-4" />
  </Svg>
)
SvgUserCheck.isIcon = true
SvgUserCheck.defaultProps = {
  size: 24
}
export default SvgUserCheck
