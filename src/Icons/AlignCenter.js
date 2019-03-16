import React from 'react'
import Svg from './Svg'
export const SvgAlignCenter = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="align-center_svg__feather align-center_svg__feather-align-center"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
  </Svg>
)
SvgAlignCenter.isIcon = true
SvgAlignCenter.defaultProps = {
  size: 24
}
export default SvgAlignCenter
