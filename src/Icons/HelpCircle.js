import React from 'react'
import Svg from './Svg'
export const SvgHelpCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="help-circle_svg__feather help-circle_svg__feather-help-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h0" />
  </Svg>
)
SvgHelpCircle.isIcon = true
SvgHelpCircle.defaultProps = {
  size: 24
}
export default SvgHelpCircle
