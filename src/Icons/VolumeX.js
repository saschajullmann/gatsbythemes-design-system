import React from 'react'
import Svg from './Svg'
export const SvgVolumeX = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="volume-x_svg__feather volume-x_svg__feather-volume-x"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
  </Svg>
)
SvgVolumeX.isIcon = true
SvgVolumeX.defaultProps = {
  size: 24
}
export default SvgVolumeX
