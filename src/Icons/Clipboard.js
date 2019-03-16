import React from 'react'
import Svg from './Svg'
export const SvgClipboard = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="clipboard_svg__feather clipboard_svg__feather-clipboard"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
  </Svg>
)
SvgClipboard.isIcon = true
SvgClipboard.defaultProps = {
  size: 24
}
export default SvgClipboard
