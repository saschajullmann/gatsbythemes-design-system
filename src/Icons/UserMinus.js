import React from 'react'
import Svg from './Svg'
export const SvgUserMinus = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="user-minus_svg__feather user-minus_svg__feather-user-minus"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={8.5} cy={7} r={4} />
    <path d="M23 11h-6" />
  </Svg>
)
SvgUserMinus.isIcon = true
SvgUserMinus.defaultProps = {
  size: 24
}
export default SvgUserMinus
