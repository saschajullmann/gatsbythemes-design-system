import React from 'react'
import Svg from './Svg'
export const SvgAlignRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="align-right_svg__feather align-right_svg__feather-align-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 10H7M21 6H3M21 14H3M21 18H7" />
  </Svg>
)
SvgAlignRight.isIcon = true
SvgAlignRight.defaultProps = {
  size: 24
}
export default SvgAlignRight
