import React from 'react'
import Svg from './Svg'
export const SvgUpload = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="upload_svg__feather upload_svg__feather-upload"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
  </Svg>
)
SvgUpload.isIcon = true
SvgUpload.defaultProps = {
  size: 24
}
export default SvgUpload
