import React from 'react'
import Svg from './Svg'
export const SvgCpu = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cpu_svg__feather cpu_svg__feather-cpu"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
    <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </Svg>
)
SvgCpu.isIcon = true
SvgCpu.defaultProps = {
  size: 24
}
export default SvgCpu
