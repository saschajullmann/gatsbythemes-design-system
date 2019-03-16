import React from 'react'
import Svg from './Svg'
export const SvgCloudOff = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cloud-off_svg__feather cloud-off_svg__feather-cloud-off"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3M1 1l22 22" />
  </Svg>
)
SvgCloudOff.isIcon = true
SvgCloudOff.defaultProps = {
  size: 24
}
export default SvgCloudOff
