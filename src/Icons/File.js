import React from 'react'
import Svg from './Svg'
export const SvgFile = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="file_svg__feather file_svg__feather-file"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <path d="M13 2v7h7" />
  </Svg>
)
SvgFile.isIcon = true
SvgFile.defaultProps = {
  size: 24
}
export default SvgFile
