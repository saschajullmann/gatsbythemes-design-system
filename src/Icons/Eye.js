import React from 'react'
import Svg from './Svg'
export const SvgEye = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="eye_svg__feather eye_svg__feather-eye"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx={12} cy={12} r={3} />
  </Svg>
)
SvgEye.isIcon = true
SvgEye.defaultProps = {
  size: 24
}
export default SvgEye
