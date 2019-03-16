import React from 'react'
import Svg from './Svg'
export const SvgUnlock = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="unlock_svg__feather unlock_svg__feather-unlock"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </Svg>
)
SvgUnlock.isIcon = true
SvgUnlock.defaultProps = {
  size: 24
}
export default SvgUnlock
