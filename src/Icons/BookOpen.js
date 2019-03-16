import React from 'react'
import Svg from './Svg'
export const SvgBookOpen = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="book-open_svg__feather book-open_svg__feather-book-open"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </Svg>
)
SvgBookOpen.isIcon = true
SvgBookOpen.defaultProps = {
  size: 24
}
export default SvgBookOpen
