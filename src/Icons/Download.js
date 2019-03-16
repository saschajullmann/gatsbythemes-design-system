import React from 'react'
import Svg from './Svg'
export const SvgDownload = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="download_svg__feather download_svg__feather-download"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </Svg>
)
SvgDownload.isIcon = true
SvgDownload.defaultProps = {
  size: 24
}
export default SvgDownload
