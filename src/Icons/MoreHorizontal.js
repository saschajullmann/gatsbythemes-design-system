import React from 'react'
import Svg from './Svg'
export const SvgMoreHorizontal = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="more-horizontal_svg__feather more-horizontal_svg__feather-more-horizontal"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={1} />
    <circle cx={19} cy={12} r={1} />
    <circle cx={5} cy={12} r={1} />
  </Svg>
)
SvgMoreHorizontal.isIcon = true
SvgMoreHorizontal.defaultProps = {
  size: 24
}
export default SvgMoreHorizontal
