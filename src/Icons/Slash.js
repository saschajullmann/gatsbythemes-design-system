import React from 'react'
import Svg from './Svg'
export const SvgSlash = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="slash_svg__feather slash_svg__feather-slash"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M4.93 4.93l14.14 14.14" />
  </Svg>
)
SvgSlash.isIcon = true
SvgSlash.defaultProps = {
  size: 24
}
export default SvgSlash
