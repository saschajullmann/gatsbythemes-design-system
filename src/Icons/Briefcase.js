import React from 'react'
import Svg from './Svg'
export const SvgBriefcase = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="briefcase_svg__feather briefcase_svg__feather-briefcase"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </Svg>
)
SvgBriefcase.isIcon = true
SvgBriefcase.defaultProps = {
  size: 24
}
export default SvgBriefcase
