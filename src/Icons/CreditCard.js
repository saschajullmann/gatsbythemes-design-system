import React from 'react'
import Svg from './Svg'
export const SvgCreditCard = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="credit-card_svg__feather credit-card_svg__feather-credit-card"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
    <path d="M1 10h22" />
  </Svg>
)
SvgCreditCard.isIcon = true
SvgCreditCard.defaultProps = {
  size: 24
}
export default SvgCreditCard
