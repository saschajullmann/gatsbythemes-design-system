import React from 'react'
import Svg from './Svg'
export const SvgSidebar = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="sidebar_svg__feather sidebar_svg__feather-sidebar"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M9 3v18" />
  </Svg>
)
SvgSidebar.isIcon = true
SvgSidebar.defaultProps = {
  size: 24
}
export default SvgSidebar
