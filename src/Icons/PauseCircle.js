import React from 'react'
import Svg from './Svg'
export const SvgPauseCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pause-circle_svg__feather pause-circle_svg__feather-pause-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M10 15V9M14 15V9" />
  </Svg>
)
SvgPauseCircle.isIcon = true
SvgPauseCircle.defaultProps = {
  size: 24
}
export default SvgPauseCircle
