import React from 'react'
import Svg from './Svg'
export const SvgServer = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="server_svg__feather server_svg__feather-server"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
    <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
    <path d="M6 6h0M6 18h0" />
  </Svg>
)
SvgServer.isIcon = true
SvgServer.defaultProps = {
  size: 24
}
export default SvgServer
