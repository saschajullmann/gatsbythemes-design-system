import React from 'react'
import Svg from './Svg'
export const SvgTablet = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tablet_svg__feather tablet_svg__feather-tablet"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect
      x={4}
      y={2}
      width={16}
      height={20}
      rx={2}
      ry={2}
      transform="rotate(180 12 12)"
    />
    <path d="M12 18h0" />
  </Svg>
)
SvgTablet.isIcon = true
SvgTablet.defaultProps = {
  size: 24
}
export default SvgTablet
