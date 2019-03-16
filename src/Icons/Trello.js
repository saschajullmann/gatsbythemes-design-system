import React from 'react'
import Svg from './Svg'
export const SvgTrello = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="trello_svg__feather trello_svg__feather-trello"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M7 7h3v9H7zM14 7h3v5h-3z" />
  </Svg>
)
SvgTrello.isIcon = true
SvgTrello.defaultProps = {
  size: 24
}
export default SvgTrello
