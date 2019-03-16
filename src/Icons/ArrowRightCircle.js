import React from 'react'
import Svg from './Svg'
export const SvgArrowRightCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-right-circle_svg__feather arrow-right-circle_svg__feather-arrow-right-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 16l4-4-4-4M8 12h8" />
  </Svg>
)
SvgArrowRightCircle.isIcon = true
SvgArrowRightCircle.defaultProps = {
  size: 24
}
export default SvgArrowRightCircle
