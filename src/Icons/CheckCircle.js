import React from 'react'
import Svg from './Svg'
export const SvgCheckCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check-circle_svg__feather check-circle_svg__feather-check-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </Svg>
)
SvgCheckCircle.isIcon = true
SvgCheckCircle.defaultProps = {
  size: 24
}
export default SvgCheckCircle
