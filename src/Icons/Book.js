import React from 'react'
import Svg from './Svg'
export const SvgBook = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="book_svg__feather book_svg__feather-book"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </Svg>
)
SvgBook.isIcon = true
SvgBook.defaultProps = {
  size: 24
}
export default SvgBook
