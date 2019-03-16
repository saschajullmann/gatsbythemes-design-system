import React from 'react'
import Svg from './Svg'
export const SvgRefreshCcw = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="refresh-ccw_svg__feather refresh-ccw_svg__feather-refresh-ccw"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M1 4v6h6M23 20v-6h-6" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </Svg>
)
SvgRefreshCcw.isIcon = true
SvgRefreshCcw.defaultProps = {
  size: 24
}
export default SvgRefreshCcw
