import React from 'react'
import Svg from './Svg'
export const SvgArrowLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-left_svg__feather arrow-left_svg__feather-arrow-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </Svg>
)
SvgArrowLeft.isIcon = true
SvgArrowLeft.defaultProps = {
  size: 24
}
export default SvgArrowLeft
