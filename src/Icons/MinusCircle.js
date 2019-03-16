import React from 'react'
import Svg from './Svg'
export const SvgMinusCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="minus-circle_svg__feather minus-circle_svg__feather-minus-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M8 12h8" />
  </Svg>
)
SvgMinusCircle.isIcon = true
SvgMinusCircle.defaultProps = {
  size: 24
}
export default SvgMinusCircle
