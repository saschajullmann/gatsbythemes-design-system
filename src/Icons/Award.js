import React from 'react'
import Svg from './Svg'
export const SvgAward = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="award_svg__feather award_svg__feather-award"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={8} r={7} />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </Svg>
)
SvgAward.isIcon = true
SvgAward.defaultProps = {
  size: 24
}
export default SvgAward
