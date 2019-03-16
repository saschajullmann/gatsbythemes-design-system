import React from 'react'
import Svg from './Svg'
export const SvgShoppingCart = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shopping-cart_svg__feather shopping-cart_svg__feather-shopping-cart"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={9} cy={21} r={1} />
    <circle cx={20} cy={21} r={1} />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </Svg>
)
SvgShoppingCart.isIcon = true
SvgShoppingCart.defaultProps = {
  size: 24
}
export default SvgShoppingCart
