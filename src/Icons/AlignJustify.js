import React from 'react'
import Svg from './Svg'
export const SvgAlignJustify = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="align-justify_svg__feather align-justify_svg__feather-align-justify"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
  </Svg>
)
SvgAlignJustify.isIcon = true
SvgAlignJustify.defaultProps = {
  size: 24
}
export default SvgAlignJustify
