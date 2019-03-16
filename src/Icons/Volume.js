import React from 'react'
import Svg from './Svg'
export const SvgVolume = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="volume_svg__feather volume_svg__feather-volume"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
  </Svg>
)
SvgVolume.isIcon = true
SvgVolume.defaultProps = {
  size: 24
}
export default SvgVolume
