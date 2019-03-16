import React from 'react'
import Svg from './Svg'
export const SvgChevronUp = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevron-up_svg__feather chevron-up_svg__feather-chevron-up"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 15l-6-6-6 6" />
  </Svg>
)
SvgChevronUp.isIcon = true
SvgChevronUp.defaultProps = {
  size: 24
}
export default SvgChevronUp
