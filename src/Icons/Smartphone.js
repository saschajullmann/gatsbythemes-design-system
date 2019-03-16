import React from 'react'
import Svg from './Svg'
export const SvgSmartphone = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="smartphone_svg__feather smartphone_svg__feather-smartphone"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
    <path d="M12 18h0" />
  </Svg>
)
SvgSmartphone.isIcon = true
SvgSmartphone.defaultProps = {
  size: 24
}
export default SvgSmartphone
