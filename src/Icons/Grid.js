import React from 'react'
import Svg from './Svg'
export const SvgGrid = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="grid_svg__feather grid_svg__feather-grid"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
  </Svg>
)
SvgGrid.isIcon = true
SvgGrid.defaultProps = {
  size: 24
}
export default SvgGrid
