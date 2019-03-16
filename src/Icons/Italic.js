import React from 'react'
import Svg from './Svg'
export const SvgItalic = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="italic_svg__feather italic_svg__feather-italic"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 4h-9M14 20H5M15 4L9 20" />
  </Svg>
)
SvgItalic.isIcon = true
SvgItalic.defaultProps = {
  size: 24
}
export default SvgItalic
