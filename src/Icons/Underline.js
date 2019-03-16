import React from 'react'
import Svg from './Svg'
export const SvgUnderline = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="underline_svg__feather underline_svg__feather-underline"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3M4 21h16" />
  </Svg>
)
SvgUnderline.isIcon = true
SvgUnderline.defaultProps = {
  size: 24
}
export default SvgUnderline
