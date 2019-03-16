import React from 'react'
import Svg from './Svg'
export const SvgLock = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lock_svg__feather lock_svg__feather-lock"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
)
SvgLock.isIcon = true
SvgLock.defaultProps = {
  size: 24
}
export default SvgLock
