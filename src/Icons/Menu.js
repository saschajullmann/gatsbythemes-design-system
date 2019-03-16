import React from 'react'
import Svg from './Svg'
export const SvgMenu = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="menu_svg__feather menu_svg__feather-menu"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </Svg>
)
SvgMenu.isIcon = true
SvgMenu.defaultProps = {
  size: 24
}
export default SvgMenu
