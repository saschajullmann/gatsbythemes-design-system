import React from 'react'
import Svg from './Svg'
export const SvgThumbsDown = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="thumbs-down_svg__feather thumbs-down_svg__feather-thumbs-down"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
  </Svg>
)
SvgThumbsDown.isIcon = true
SvgThumbsDown.defaultProps = {
  size: 24
}
export default SvgThumbsDown
