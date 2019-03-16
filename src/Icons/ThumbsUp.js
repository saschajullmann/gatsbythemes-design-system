import React from 'react'
import Svg from './Svg'
export const SvgThumbsUp = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="thumbs-up_svg__feather thumbs-up_svg__feather-thumbs-up"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </Svg>
)
SvgThumbsUp.isIcon = true
SvgThumbsUp.defaultProps = {
  size: 24
}
export default SvgThumbsUp
