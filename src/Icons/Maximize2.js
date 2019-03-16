import React from 'react'
import Svg from './Svg'
export const SvgMaximize2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="maximize-2_svg__feather maximize-2_svg__feather-maximize-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </Svg>
)
SvgMaximize2.isIcon = true
SvgMaximize2.defaultProps = {
  size: 24
}
export default SvgMaximize2
