import React from 'react'
import Svg from './Svg'
export const SvgCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="circle_svg__feather circle_svg__feather-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
  </Svg>
)
SvgCircle.isIcon = true
SvgCircle.defaultProps = {
  size: 24
}
export default SvgCircle
