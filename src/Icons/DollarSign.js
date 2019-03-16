import React from 'react'
import Svg from './Svg'
export const SvgDollarSign = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dollar-sign_svg__feather dollar-sign_svg__feather-dollar-sign"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </Svg>
)
SvgDollarSign.isIcon = true
SvgDollarSign.defaultProps = {
  size: 24
}
export default SvgDollarSign
