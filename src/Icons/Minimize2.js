import React from 'react'
import Svg from './Svg'
export const SvgMinimize2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="minimize-2_svg__feather minimize-2_svg__feather-minimize-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
  </Svg>
)
SvgMinimize2.isIcon = true
SvgMinimize2.defaultProps = {
  size: 24
}
export default SvgMinimize2
