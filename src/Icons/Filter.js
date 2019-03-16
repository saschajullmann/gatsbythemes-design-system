import React from 'react'
import Svg from './Svg'
export const SvgFilter = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="filter_svg__feather filter_svg__feather-filter"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
  </Svg>
)
SvgFilter.isIcon = true
SvgFilter.defaultProps = {
  size: 24
}
export default SvgFilter
