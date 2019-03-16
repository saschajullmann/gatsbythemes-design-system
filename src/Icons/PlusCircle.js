import React from 'react'
import Svg from './Svg'
export const SvgPlusCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="plus-circle_svg__feather plus-circle_svg__feather-plus-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v8M8 12h8" />
  </Svg>
)
SvgPlusCircle.isIcon = true
SvgPlusCircle.defaultProps = {
  size: 24
}
export default SvgPlusCircle
