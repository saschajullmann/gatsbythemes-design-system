import React from 'react'
import Svg from './Svg'
export const SvgArrowDownCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-down-circle_svg__feather arrow-down-circle_svg__feather-arrow-down-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M8 12l4 4 4-4M12 8v8" />
  </Svg>
)
SvgArrowDownCircle.isIcon = true
SvgArrowDownCircle.defaultProps = {
  size: 24
}
export default SvgArrowDownCircle
