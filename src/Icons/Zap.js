import React from 'react'
import Svg from './Svg'
export const SvgZap = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="zap_svg__feather zap_svg__feather-zap"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </Svg>
)
SvgZap.isIcon = true
SvgZap.defaultProps = {
  size: 24
}
export default SvgZap
