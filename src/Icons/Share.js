import React from 'react'
import Svg from './Svg'
export const SvgShare = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="share_svg__feather share_svg__feather-share"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />
  </Svg>
)
SvgShare.isIcon = true
SvgShare.defaultProps = {
  size: 24
}
export default SvgShare
