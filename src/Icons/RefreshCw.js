import React from 'react'
import Svg from './Svg'
export const SvgRefreshCw = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="refresh-cw_svg__feather refresh-cw_svg__feather-refresh-cw"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 4v6h-6M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </Svg>
)
SvgRefreshCw.isIcon = true
SvgRefreshCw.defaultProps = {
  size: 24
}
export default SvgRefreshCw
