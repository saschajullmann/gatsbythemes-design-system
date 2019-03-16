import React from 'react'
import Svg from './Svg'
export const SvgNavigation = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="navigation_svg__feather navigation_svg__feather-navigation"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </Svg>
)
SvgNavigation.isIcon = true
SvgNavigation.defaultProps = {
  size: 24
}
export default SvgNavigation
