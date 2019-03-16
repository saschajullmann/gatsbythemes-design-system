import React from 'react'
import Svg from './Svg'
export const SvgArrowUpCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-up-circle_svg__feather arrow-up-circle_svg__feather-arrow-up-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M16 12l-4-4-4 4M12 16V8" />
  </Svg>
)
SvgArrowUpCircle.isIcon = true
SvgArrowUpCircle.defaultProps = {
  size: 24
}
export default SvgArrowUpCircle
