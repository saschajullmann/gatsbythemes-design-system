import React from 'react'
import Svg from './Svg'
export const SvgArchive = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="archive_svg__feather archive_svg__feather-archive"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
  </Svg>
)
SvgArchive.isIcon = true
SvgArchive.defaultProps = {
  size: 24
}
export default SvgArchive
