import React from 'react'
import Svg from './Svg'
export const SvgMic = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mic_svg__feather mic_svg__feather-mic"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
  </Svg>
)
SvgMic.isIcon = true
SvgMic.defaultProps = {
  size: 24
}
export default SvgMic
