import React from 'react'
import Svg from './Svg'
export const SvgVolume2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="volume-2_svg__feather volume-2_svg__feather-volume-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </Svg>
)
SvgVolume2.isIcon = true
SvgVolume2.defaultProps = {
  size: 24
}
export default SvgVolume2
