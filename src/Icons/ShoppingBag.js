import React from 'react'
import Svg from './Svg'
export const SvgShoppingBag = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shopping-bag_svg__feather shopping-bag_svg__feather-shopping-bag"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
  </Svg>
)
SvgShoppingBag.isIcon = true
SvgShoppingBag.defaultProps = {
  size: 24
}
export default SvgShoppingBag
