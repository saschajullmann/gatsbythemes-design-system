import React from 'react'
import Svg from './Svg'
export const SvgSave = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="save_svg__feather save_svg__feather-save"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <path d="M17 21v-8H7v8M7 3v5h8" />
  </Svg>
)
SvgSave.isIcon = true
SvgSave.defaultProps = {
  size: 24
}
export default SvgSave
