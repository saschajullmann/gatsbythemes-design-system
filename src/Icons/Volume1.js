import React from 'react'
import Svg from './Svg'
export const SvgVolume1 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="volume-1_svg__feather volume-1_svg__feather-volume-1"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07" />
  </Svg>
)
SvgVolume1.isIcon = true
SvgVolume1.defaultProps = {
  size: 24
}
export default SvgVolume1
