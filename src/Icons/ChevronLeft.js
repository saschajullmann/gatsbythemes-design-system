import React from 'react'
import Svg from './Svg'
export const SvgChevronLeft = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevron-left_svg__feather chevron-left_svg__feather-chevron-left"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M15 18l-6-6 6-6" />
  </Svg>
)
SvgChevronLeft.isIcon = true
SvgChevronLeft.defaultProps = {
  size: 24
}
export default SvgChevronLeft
