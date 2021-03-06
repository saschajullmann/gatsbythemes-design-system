import React from 'react'
import Svg from './Svg'
export const SvgFileMinus = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="file-minus_svg__feather file-minus_svg__feather-file-minus"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 15h6" />
  </Svg>
)
SvgFileMinus.isIcon = true
SvgFileMinus.defaultProps = {
  size: 24
}
export default SvgFileMinus
