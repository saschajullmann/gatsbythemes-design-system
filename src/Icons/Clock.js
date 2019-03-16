import React from 'react'
import Svg from './Svg'
export const SvgClock = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="clock_svg__feather clock_svg__feather-clock"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 6v6l4 2" />
  </Svg>
)
SvgClock.isIcon = true
SvgClock.defaultProps = {
  size: 24
}
export default SvgClock
