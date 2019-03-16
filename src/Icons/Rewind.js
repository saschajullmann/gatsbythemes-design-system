import React from 'react'
import Svg from './Svg'
export const SvgRewind = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rewind_svg__feather rewind_svg__feather-rewind"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z" />
  </Svg>
)
SvgRewind.isIcon = true
SvgRewind.defaultProps = {
  size: 24
}
export default SvgRewind
