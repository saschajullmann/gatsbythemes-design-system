import React from 'react'
import Svg from './Svg'
export const SvgMeh = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="meh_svg__feather meh_svg__feather-meh"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M8 15h8M9 9h.01M15 9h.01" />
  </Svg>
)
SvgMeh.isIcon = true
SvgMeh.defaultProps = {
  size: 24
}
export default SvgMeh
