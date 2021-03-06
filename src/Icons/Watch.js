import React from 'react'
import Svg from './Svg'
export const SvgWatch = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="watch_svg__feather watch_svg__feather-watch"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={7} />
    <path d="M12 9v3l1.5 1.5M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
  </Svg>
)
SvgWatch.isIcon = true
SvgWatch.defaultProps = {
  size: 24
}
export default SvgWatch
