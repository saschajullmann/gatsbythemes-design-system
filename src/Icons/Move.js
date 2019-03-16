import React from 'react'
import Svg from './Svg'
export const SvgMove = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="move_svg__feather move_svg__feather-move"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
  </Svg>
)
SvgMove.isIcon = true
SvgMove.defaultProps = {
  size: 24
}
export default SvgMove
