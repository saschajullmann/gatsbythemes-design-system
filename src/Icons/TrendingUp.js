import React from 'react'
import Svg from './Svg'
export const SvgTrendingUp = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="trending-up_svg__feather trending-up_svg__feather-trending-up"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 6l-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </Svg>
)
SvgTrendingUp.isIcon = true
SvgTrendingUp.defaultProps = {
  size: 24
}
export default SvgTrendingUp
