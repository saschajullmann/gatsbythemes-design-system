import React from 'react'
import Svg from './Svg'
export const SvgMusic = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="music_svg__feather music_svg__feather-music"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx={6} cy={18} r={3} />
    <circle cx={18} cy={16} r={3} />
  </Svg>
)
SvgMusic.isIcon = true
SvgMusic.defaultProps = {
  size: 24
}
export default SvgMusic
