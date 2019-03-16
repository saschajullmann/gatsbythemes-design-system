import React from 'react'
import Svg from './Svg'
export const SvgCloudRain = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cloud-rain_svg__feather cloud-rain_svg__feather-cloud-rain"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
  </Svg>
)
SvgCloudRain.isIcon = true
SvgCloudRain.defaultProps = {
  size: 24
}
export default SvgCloudRain
