import React from 'react'
import Svg from './Svg'
export const SvgTrash2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="trash-2_svg__feather trash-2_svg__feather-trash-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
  </Svg>
)
SvgTrash2.isIcon = true
SvgTrash2.defaultProps = {
  size: 24
}
export default SvgTrash2
