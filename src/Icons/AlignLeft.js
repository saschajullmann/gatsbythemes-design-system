import React from 'react'
import Svg from './Svg'
export const SvgAlignLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="align-left_svg__feather align-left_svg__feather-align-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 10H3M21 6H3M21 14H3M17 18H3" />
  </Svg>
)
SvgAlignLeft.isIcon = true
SvgAlignLeft.defaultProps = {
  size: 24
}
export default SvgAlignLeft
