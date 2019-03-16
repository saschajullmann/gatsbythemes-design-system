import React from 'react'
import Svg from './Svg'
export const SvgDelete = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="delete_svg__feather delete_svg__feather-delete"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6" />
  </Svg>
)
SvgDelete.isIcon = true
SvgDelete.defaultProps = {
  size: 24
}
export default SvgDelete
