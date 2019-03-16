import React from 'react'
import Svg from './Svg'
export const SvgCast = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cast_svg__feather cast_svg__feather-cast"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 20h0" />
  </Svg>
)
SvgCast.isIcon = true
SvgCast.defaultProps = {
  size: 24
}
export default SvgCast
