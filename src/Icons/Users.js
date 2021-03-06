import React from 'react'
import Svg from './Svg'
export const SvgUsers = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="users_svg__feather users_svg__feather-users"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={9} cy={7} r={4} />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
)
SvgUsers.isIcon = true
SvgUsers.defaultProps = {
  size: 24
}
export default SvgUsers
