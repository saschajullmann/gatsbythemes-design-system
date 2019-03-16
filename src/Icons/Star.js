import React from 'react'
import Svg from './Svg'
export const SvgStar = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="star_svg__feather star_svg__feather-star"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </Svg>
)
SvgStar.isIcon = true
SvgStar.defaultProps = {
  size: 24
}
export default SvgStar
