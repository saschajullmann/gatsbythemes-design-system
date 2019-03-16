import React from 'react'
import Svg from './Svg'
export const SvgCommand = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="command_svg__feather command_svg__feather-command"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </Svg>
)
SvgCommand.isIcon = true
SvgCommand.defaultProps = {
  size: 24
}
export default SvgCommand
