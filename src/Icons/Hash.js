import React from 'react'
import Svg from './Svg'
export const SvgHash = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="hash_svg__feather hash_svg__feather-hash"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
  </Svg>
)
SvgHash.isIcon = true
SvgHash.defaultProps = {
  size: 24
}
export default SvgHash
