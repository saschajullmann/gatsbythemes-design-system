import React from 'react'
import Svg from './Svg'
export const SvgSpeaker = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="speaker_svg__feather speaker_svg__feather-speaker"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
    <circle cx={12} cy={14} r={4} />
    <path d="M12 6h0" />
  </Svg>
)
SvgSpeaker.isIcon = true
SvgSpeaker.defaultProps = {
  size: 24
}
export default SvgSpeaker
