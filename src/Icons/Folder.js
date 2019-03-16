import React from 'react'
import Svg from './Svg'
export const SvgFolder = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="folder_svg__feather folder_svg__feather-folder"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </Svg>
)
SvgFolder.isIcon = true
SvgFolder.defaultProps = {
  size: 24
}
export default SvgFolder
