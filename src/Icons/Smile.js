import React from 'react'
import Svg from './Svg'
export const SvgSmile = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="smile_svg__feather smile_svg__feather-smile"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
  </Svg>
)
SvgSmile.isIcon = true
SvgSmile.defaultProps = {
  size: 24
}
export default SvgSmile
