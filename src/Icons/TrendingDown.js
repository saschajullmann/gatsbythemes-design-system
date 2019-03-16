import React from 'react'
import Svg from './Svg'
export const SvgTrendingDown = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="trending-down_svg__feather trending-down_svg__feather-trending-down"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 18l-9.5-9.5-5 5L1 6" />
    <path d="M17 18h6v-6" />
  </Svg>
)
SvgTrendingDown.isIcon = true
SvgTrendingDown.defaultProps = {
  size: 24
}
export default SvgTrendingDown
