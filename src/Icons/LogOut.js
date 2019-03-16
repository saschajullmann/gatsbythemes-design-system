import React from 'react'
import Svg from './Svg'
export const SvgLogOut = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="log-out_svg__feather log-out_svg__feather-log-out"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
  </Svg>
)
SvgLogOut.isIcon = true
SvgLogOut.defaultProps = {
  size: 24
}
export default SvgLogOut
