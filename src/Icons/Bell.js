import React from 'react'
import Svg from './Svg'
export const SvgBell = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bell_svg__feather bell_svg__feather-bell"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
  </Svg>
)
SvgBell.isIcon = true
SvgBell.defaultProps = {
  size: 24
}
export default SvgBell
