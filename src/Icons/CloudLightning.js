import React from 'react'
import Svg from './Svg'
export const SvgCloudLightning = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cloud-lightning_svg__feather cloud-lightning_svg__feather-cloud-lightning"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
    <path d="M13 11l-4 6h6l-4 6" />
  </Svg>
)
SvgCloudLightning.isIcon = true
SvgCloudLightning.defaultProps = {
  size: 24
}
export default SvgCloudLightning
