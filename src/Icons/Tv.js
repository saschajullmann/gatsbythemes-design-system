import React from 'react'
import Svg from './Svg'
export const SvgTv = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tv_svg__feather tv_svg__feather-tv"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
    <path d="M17 2l-5 5-5-5" />
  </Svg>
)
SvgTv.isIcon = true
SvgTv.defaultProps = {
  size: 24
}
export default SvgTv
