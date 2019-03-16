import React from 'react'
import Svg from './Svg'
export const SvgChevronRight = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevron-right_svg__feather chevron-right_svg__feather-chevron-right"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9 18l6-6-6-6" />
  </Svg>
)
SvgChevronRight.isIcon = true
SvgChevronRight.defaultProps = {
  size: 24
}
export default SvgChevronRight
