import React from 'react'
import Svg from './Svg'
export const SvgMonitor = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="monitor_svg__feather monitor_svg__feather-monitor"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
    <path d="M8 21h8M12 17v4" />
  </Svg>
)
SvgMonitor.isIcon = true
SvgMonitor.defaultProps = {
  size: 24
}
export default SvgMonitor
