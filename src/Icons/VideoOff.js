import React from 'react'
import Svg from './Svg'
export const SvgVideoOff = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="video-off_svg__feather video-off_svg__feather-video-off"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10M1 1l22 22" />
  </Svg>
)
SvgVideoOff.isIcon = true
SvgVideoOff.defaultProps = {
  size: 24
}
export default SvgVideoOff
