import React from 'react'
import Svg from './Svg'
export const SvgSkipForward = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="skip-forward_svg__feather skip-forward_svg__feather-skip-forward"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5 4l10 8-10 8V4zM19 5v14" />
  </Svg>
)
SvgSkipForward.isIcon = true
SvgSkipForward.defaultProps = {
  size: 24
}
export default SvgSkipForward
