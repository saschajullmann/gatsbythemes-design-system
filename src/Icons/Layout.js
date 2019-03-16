import React from 'react'
import Svg from './Svg'
export const SvgLayout = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="layout_svg__feather layout_svg__feather-layout"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M3 9h18M9 21V9" />
  </Svg>
)
SvgLayout.isIcon = true
SvgLayout.defaultProps = {
  size: 24
}
export default SvgLayout
