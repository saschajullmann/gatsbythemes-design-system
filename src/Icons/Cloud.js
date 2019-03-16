import React from 'react'
import Svg from './Svg'
export const SvgCloud = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cloud_svg__feather cloud_svg__feather-cloud"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </Svg>
)
SvgCloud.isIcon = true
SvgCloud.defaultProps = {
  size: 24
}
export default SvgCloud
