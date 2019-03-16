import React from 'react'
import Svg from './Svg'
export const SvgMinimize = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="minimize_svg__feather minimize_svg__feather-minimize"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
  </Svg>
)
SvgMinimize.isIcon = true
SvgMinimize.defaultProps = {
  size: 24
}
export default SvgMinimize
