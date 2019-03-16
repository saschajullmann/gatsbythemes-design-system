import React from 'react'
import Svg from './Svg'
export const SvgRotateCcw = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rotate-ccw_svg__feather rotate-ccw_svg__feather-rotate-ccw"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M1 4v6h6" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </Svg>
)
SvgRotateCcw.isIcon = true
SvgRotateCcw.defaultProps = {
  size: 24
}
export default SvgRotateCcw
