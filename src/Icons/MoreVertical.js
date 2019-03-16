import React from 'react'
import Svg from './Svg'
export const SvgMoreVertical = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="more-vertical_svg__feather more-vertical_svg__feather-more-vertical"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={1} />
    <circle cx={12} cy={5} r={1} />
    <circle cx={12} cy={19} r={1} />
  </Svg>
)
SvgMoreVertical.isIcon = true
SvgMoreVertical.defaultProps = {
  size: 24
}
export default SvgMoreVertical
