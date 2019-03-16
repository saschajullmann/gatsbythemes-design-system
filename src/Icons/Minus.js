import React from 'react'
import Svg from './Svg'
export const SvgMinus = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="minus_svg__feather minus_svg__feather-minus"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5 12h14" />
  </Svg>
)
SvgMinus.isIcon = true
SvgMinus.defaultProps = {
  size: 24
}
export default SvgMinus
