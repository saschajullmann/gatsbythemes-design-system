import React from 'react'
import Svg from './Svg'
export const SvgCoffee = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="coffee_svg__feather coffee_svg__feather-coffee"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
  </Svg>
)
SvgCoffee.isIcon = true
SvgCoffee.defaultProps = {
  size: 24
}
export default SvgCoffee
