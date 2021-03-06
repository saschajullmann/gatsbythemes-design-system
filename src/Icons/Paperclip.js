import React from 'react'
import Svg from './Svg'
export const SvgPaperclip = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="paperclip_svg__feather paperclip_svg__feather-paperclip"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </Svg>
)
SvgPaperclip.isIcon = true
SvgPaperclip.defaultProps = {
  size: 24
}
export default SvgPaperclip
