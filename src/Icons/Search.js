import React from 'react'
import Svg from './Svg'
export const SvgSearch = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="search_svg__feather search_svg__feather-search"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="M21 21l-4.35-4.35" />
  </Svg>
)
SvgSearch.isIcon = true
SvgSearch.defaultProps = {
  size: 24
}
export default SvgSearch
