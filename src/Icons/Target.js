import React from 'react'
import Svg from './Svg'
export const SvgTarget = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="target_svg__feather target_svg__feather-target"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={6} />
    <circle cx={12} cy={12} r={2} />
  </Svg>
)
SvgTarget.isIcon = true
SvgTarget.defaultProps = {
  size: 24
}
export default SvgTarget
