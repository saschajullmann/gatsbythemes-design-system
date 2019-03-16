import React from 'react'
import Svg from './Svg'
export const SvgAlertCircle = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="alert-circle_svg__feather alert-circle_svg__feather-alert-circle"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v4M12 16h0" />
  </Svg>
)
SvgAlertCircle.isIcon = true
SvgAlertCircle.defaultProps = {
  size: 24
}
export default SvgAlertCircle
