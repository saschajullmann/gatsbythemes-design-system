import React from 'react'
import Svg from './Svg'
export const SvgSend = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="send_svg__feather send_svg__feather-send"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </Svg>
)
SvgSend.isIcon = true
SvgSend.defaultProps = {
  size: 24
}
export default SvgSend
