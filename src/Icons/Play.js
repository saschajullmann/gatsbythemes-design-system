import React from 'react'
import Svg from './Svg'
export const SvgPlay = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="play_svg__feather play_svg__feather-play"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5 3l14 9-14 9V3z" />
  </Svg>
)
SvgPlay.isIcon = true
SvgPlay.defaultProps = {
  size: 24
}
export default SvgPlay
