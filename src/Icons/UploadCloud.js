import React from 'react'
import Svg from './Svg'
export const SvgUploadCloud = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="upload-cloud_svg__feather upload-cloud_svg__feather-upload-cloud"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 16l-4-4-4 4M12 12v9" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <path d="M16 16l-4-4-4 4" />
  </Svg>
)
SvgUploadCloud.isIcon = true
SvgUploadCloud.defaultProps = {
  size: 24
}
export default SvgUploadCloud
