import React from 'react'
import Svg from './Svg'
export const SvgRepeat = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="repeat_svg__feather repeat_svg__feather-repeat"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </Svg>
)
SvgRepeat.isIcon = true
SvgRepeat.defaultProps = {
  size: 24
}
export default SvgRepeat
