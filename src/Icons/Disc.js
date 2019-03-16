import React from 'react'
import Svg from './Svg'
export const SvgDisc = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="disc_svg__feather disc_svg__feather-disc"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={3} />
  </Svg>
)
SvgDisc.isIcon = true
SvgDisc.defaultProps = {
  size: 24
}
export default SvgDisc
