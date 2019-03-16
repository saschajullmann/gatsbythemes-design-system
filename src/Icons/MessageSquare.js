import React from 'react'
import Svg from './Svg'
export const SvgMessageSquare = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="message-square_svg__feather message-square_svg__feather-message-square"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Svg>
)
SvgMessageSquare.isIcon = true
SvgMessageSquare.defaultProps = {
  size: 24
}
export default SvgMessageSquare
