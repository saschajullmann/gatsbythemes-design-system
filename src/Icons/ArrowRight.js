import React from 'react'
import Svg from './Svg'
export const SvgArrowRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Svg>
)
SvgArrowRight.isIcon = true
SvgArrowRight.defaultProps = {
  size: 24
}
export default SvgArrowRight
