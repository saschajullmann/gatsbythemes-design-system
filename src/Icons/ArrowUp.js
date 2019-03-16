import React from 'react'
import Svg from './Svg'
export const SvgArrowUp = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-up_svg__feather arrow-up_svg__feather-arrow-up"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </Svg>
)
SvgArrowUp.isIcon = true
SvgArrowUp.defaultProps = {
  size: 24
}
export default SvgArrowUp
