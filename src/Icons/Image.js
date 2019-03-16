import React from 'react'
import Svg from './Svg'
export const SvgImage = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="image_svg__feather image_svg__feather-image"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <circle cx={8.5} cy={8.5} r={1.5} />
    <path d="M21 15l-5-5L5 21" />
  </Svg>
)
SvgImage.isIcon = true
SvgImage.defaultProps = {
  size: 24
}
export default SvgImage
