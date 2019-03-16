import React from 'react'
import Svg from './Svg'
export const SvgCloudDrizzle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cloud-drizzle_svg__feather cloud-drizzle_svg__feather-cloud-drizzle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8 19v2M8 13v2M16 19v2M16 13v2M12 21v2M12 15v2M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
  </Svg>
)
SvgCloudDrizzle.isIcon = true
SvgCloudDrizzle.defaultProps = {
  size: 24
}
export default SvgCloudDrizzle
