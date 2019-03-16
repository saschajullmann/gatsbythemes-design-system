import React from 'react'
import Svg from './Svg'
export const SvgRotateCw = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rotate-cw_svg__feather rotate-cw_svg__feather-rotate-cw"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 4v6h-6" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </Svg>
)
SvgRotateCw.isIcon = true
SvgRotateCw.defaultProps = {
  size: 24
}
export default SvgRotateCw
