import React from 'react'
import Svg from './Svg'
export const SvgBookmark = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bookmark_svg__feather bookmark_svg__feather-bookmark"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </Svg>
)
SvgBookmark.isIcon = true
SvgBookmark.defaultProps = {
  size: 24
}
export default SvgBookmark
