import React from 'react'
import Svg from './Svg'
export const SvgCheck = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check_svg__feather check_svg__feather-check"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M20 6L9 17l-5-5" />
  </Svg>
)
SvgCheck.isIcon = true
SvgCheck.defaultProps = {
  size: 24
}
export default SvgCheck
