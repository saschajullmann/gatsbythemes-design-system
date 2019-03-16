import React from 'react'
import Svg from './Svg'
export const SvgTerminal = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="terminal_svg__feather terminal_svg__feather-terminal"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 17l6-6-6-6M12 19h8" />
  </Svg>
)
SvgTerminal.isIcon = true
SvgTerminal.defaultProps = {
  size: 24
}
export default SvgTerminal
