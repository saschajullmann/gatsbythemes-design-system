import React from 'react'
import Svg from './Svg'
export const SvgLink = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="link_svg__feather link_svg__feather-link"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </Svg>
)
SvgLink.isIcon = true
SvgLink.defaultProps = {
  size: 24
}
export default SvgLink
