import React from 'react'
import Svg from './Svg'
export const SvgNavigation2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="navigation-2_svg__feather navigation-2_svg__feather-navigation-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 2l7 19-7-4-7 4 7-19z" />
  </Svg>
)
SvgNavigation2.isIcon = true
SvgNavigation2.defaultProps = {
  size: 24
}
export default SvgNavigation2
