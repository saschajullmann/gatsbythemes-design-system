import React from 'react'
import Svg from './Svg'
export const SvgFileText = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="file-text_svg__feather file-text_svg__feather-file-text"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </Svg>
)
SvgFileText.isIcon = true
SvgFileText.defaultProps = {
  size: 24
}
export default SvgFileText
