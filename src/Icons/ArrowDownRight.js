import React from 'react'
import Svg from './Svg'
export const SvgArrowDownRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-down-right_svg__feather arrow-down-right_svg__feather-arrow-down-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7 7l10 10M17 7v10H7" />
  </Svg>
)
SvgArrowDownRight.isIcon = true
SvgArrowDownRight.defaultProps = {
  size: 24
}
export default SvgArrowDownRight
