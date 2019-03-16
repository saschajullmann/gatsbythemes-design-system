import React from 'react'
import Svg from './Svg'
export const SvgDownloadCloud = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="download-cloud_svg__feather download-cloud_svg__feather-download-cloud"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8 17l4 4 4-4M12 12v9" />
    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
  </Svg>
)
SvgDownloadCloud.isIcon = true
SvgDownloadCloud.defaultProps = {
  size: 24
}
export default SvgDownloadCloud
