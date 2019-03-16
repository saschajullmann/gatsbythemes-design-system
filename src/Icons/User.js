import React from 'react'
import Svg from './Svg'
export const SvgUser = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="user_svg__feather user_svg__feather-user"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx={12} cy={7} r={4} />
  </Svg>
)
SvgUser.isIcon = true
SvgUser.defaultProps = {
  size: 24
}
export default SvgUser
