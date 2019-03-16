import React from 'react'
import Svg from './Svg'
export const SvgFlag = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flag_svg__feather flag_svg__feather-flag"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
  </Svg>
)
SvgFlag.isIcon = true
SvgFlag.defaultProps = {
  size: 24
}
export default SvgFlag
