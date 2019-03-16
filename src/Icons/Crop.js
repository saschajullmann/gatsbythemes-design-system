import React from 'react'
import Svg from './Svg'
export const SvgCrop = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="crop_svg__feather crop_svg__feather-crop"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
    <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
  </Svg>
)
SvgCrop.isIcon = true
SvgCrop.defaultProps = {
  size: 24
}
export default SvgCrop
