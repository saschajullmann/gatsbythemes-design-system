import React from 'react'
import Svg from './Svg'
export const SvgPlayCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="play-circle_svg__feather play-circle_svg__feather-play-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M10 8l6 4-6 4V8z" />
  </Svg>
)
SvgPlayCircle.isIcon = true
SvgPlayCircle.defaultProps = {
  size: 24
}
export default SvgPlayCircle
