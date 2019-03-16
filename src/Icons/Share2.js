import React from 'react'
import Svg from './Svg'
export const SvgShare2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="share-2_svg__feather share-2_svg__feather-share-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={18} cy={5} r={3} />
    <circle cx={6} cy={12} r={3} />
    <circle cx={18} cy={19} r={3} />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </Svg>
)
SvgShare2.isIcon = true
SvgShare2.defaultProps = {
  size: 24
}
export default SvgShare2
