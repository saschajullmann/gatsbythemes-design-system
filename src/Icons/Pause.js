import React from 'react'
import Svg from './Svg'
export const SvgPause = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pause_svg__feather pause_svg__feather-pause"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
  </Svg>
)
SvgPause.isIcon = true
SvgPause.defaultProps = {
  size: 24
}
export default SvgPause
