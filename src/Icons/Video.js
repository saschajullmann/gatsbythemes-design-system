import React from 'react'
import Svg from './Svg'
export const SvgVideo = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="video_svg__feather video_svg__feather-video"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
  </Svg>
)
SvgVideo.isIcon = true
SvgVideo.defaultProps = {
  size: 24
}
export default SvgVideo
