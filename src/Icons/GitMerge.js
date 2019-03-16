import React from 'react'
import Svg from './Svg'
export const SvgGitMerge = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="git-merge_svg__feather git-merge_svg__feather-git-merge"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={18} cy={18} r={3} />
    <circle cx={6} cy={6} r={3} />
    <path d="M6 21V9a9 9 0 0 0 9 9" />
  </Svg>
)
SvgGitMerge.isIcon = true
SvgGitMerge.defaultProps = {
  size: 24
}
export default SvgGitMerge
