import React from 'react'
import Svg from './Svg'
export const SvgArrowDown = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-down_svg__feather arrow-down_svg__feather-arrow-down"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </Svg>
)
SvgArrowDown.isIcon = true
SvgArrowDown.defaultProps = {
  size: 24
}
export default SvgArrowDown
