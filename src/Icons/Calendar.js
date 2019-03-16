import React from 'react'
import Svg from './Svg'
export const SvgCalendar = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="calendar_svg__feather calendar_svg__feather-calendar"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Svg>
)
SvgCalendar.isIcon = true
SvgCalendar.defaultProps = {
  size: 24
}
export default SvgCalendar
