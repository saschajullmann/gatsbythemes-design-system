import React from 'react'
import Svg from './Svg'
export const SvgFrown = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="frown_svg__feather frown_svg__feather-frown"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01" />
  </Svg>
)
SvgFrown.isIcon = true
SvgFrown.defaultProps = {
  size: 24
}
export default SvgFrown
