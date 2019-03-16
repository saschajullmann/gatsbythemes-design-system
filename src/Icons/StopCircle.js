import React from 'react'
import Svg from './Svg'
export const SvgStopCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stop-circle_svg__feather stop-circle_svg__feather-stop-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M9 9h6v6H9z" />
  </Svg>
)
SvgStopCircle.isIcon = true
SvgStopCircle.defaultProps = {
  size: 24
}
export default SvgStopCircle
