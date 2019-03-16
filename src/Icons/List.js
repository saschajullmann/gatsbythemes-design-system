import React from 'react'
import Svg from './Svg'
export const SvgList = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="list_svg__feather list_svg__feather-list"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8 6h13M8 12h13M8 18h13M3 6h0M3 12h0M3 18h0" />
  </Svg>
)
SvgList.isIcon = true
SvgList.defaultProps = {
  size: 24
}
export default SvgList
