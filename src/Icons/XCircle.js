import React from 'react'
import Svg from './Svg'
export const SvgXCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="x-circle_svg__feather x-circle_svg__feather-x-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M15 9l-6 6M9 9l6 6" />
  </Svg>
)
SvgXCircle.isIcon = true
SvgXCircle.defaultProps = {
  size: 24
}
export default SvgXCircle
