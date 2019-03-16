import React from 'react'
import Svg from './Svg'
export const SvgInfo = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="info_svg__feather info_svg__feather-info"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 16v-4M12 8h0" />
  </Svg>
)
SvgInfo.isIcon = true
SvgInfo.defaultProps = {
  size: 24
}
export default SvgInfo
