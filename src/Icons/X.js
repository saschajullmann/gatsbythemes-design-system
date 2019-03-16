import React from 'react'
import Svg from './Svg'
export const SvgX = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="x_svg__feather x_svg__feather-x"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </Svg>
)
SvgX.isIcon = true
SvgX.defaultProps = {
  size: 24
}
export default SvgX
