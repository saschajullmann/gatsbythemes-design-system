import React from 'react'
import Svg from './Svg'
export const SvgArrowLeftCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-left-circle_svg__feather arrow-left-circle_svg__feather-arrow-left-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8l-4 4 4 4M16 12H8" />
  </Svg>
)
SvgArrowLeftCircle.isIcon = true
SvgArrowLeftCircle.defaultProps = {
  size: 24
}
export default SvgArrowLeftCircle
