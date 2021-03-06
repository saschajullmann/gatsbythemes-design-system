import React from 'react'
import Svg from './Svg'
export const SvgAnchor = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="anchor_svg__feather anchor_svg__feather-anchor"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={5} r={3} />
    <path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" />
  </Svg>
)
SvgAnchor.isIcon = true
SvgAnchor.defaultProps = {
  size: 24
}
export default SvgAnchor
