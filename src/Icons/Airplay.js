import React from 'react'
import Svg from './Svg'
export const SvgAirplay = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="airplay_svg__feather airplay_svg__feather-airplay"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
    <path d="M12 15l5 6H7l5-6z" />
  </Svg>
)
SvgAirplay.isIcon = true
SvgAirplay.defaultProps = {
  size: 24
}
export default SvgAirplay
