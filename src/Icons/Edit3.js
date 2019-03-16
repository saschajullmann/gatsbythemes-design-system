import React from 'react'
import Svg from './Svg'
export const SvgEdit3 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="edit-3_svg__feather edit-3_svg__feather-edit-3"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </Svg>
)
SvgEdit3.isIcon = true
SvgEdit3.defaultProps = {
  size: 24
}
export default SvgEdit3
