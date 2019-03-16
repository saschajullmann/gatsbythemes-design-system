import React from 'react'
import Svg from './Svg'
export const SvgCloudSnow = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cloud-snow_svg__feather cloud-snow_svg__feather-cloud-snow"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25M8 16h0M8 20h0M12 18h0M12 22h0M16 16h0M16 20h0" />
  </Svg>
)
SvgCloudSnow.isIcon = true
SvgCloudSnow.defaultProps = {
  size: 24
}
export default SvgCloudSnow
