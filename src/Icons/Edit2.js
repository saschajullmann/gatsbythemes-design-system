import React from 'react'
import Svg from './Svg'
export const SvgEdit2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="edit-2_svg__feather edit-2_svg__feather-edit-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </Svg>
)
SvgEdit2.isIcon = true
SvgEdit2.defaultProps = {
  size: 24
}
export default SvgEdit2
