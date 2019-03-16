import React from 'react'
import Svg from './Svg'
export const SvgShuffle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shuffle_svg__feather shuffle_svg__feather-shuffle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </Svg>
)
SvgShuffle.isIcon = true
SvgShuffle.defaultProps = {
  size: 24
}
export default SvgShuffle
