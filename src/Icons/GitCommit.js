import React from 'react'
import Svg from './Svg'
export const SvgGitCommit = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="git-commit_svg__feather git-commit_svg__feather-git-commit"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={4} />
    <path d="M1.05 12H7M17.01 12h5.95" />
  </Svg>
)
SvgGitCommit.isIcon = true
SvgGitCommit.defaultProps = {
  size: 24
}
export default SvgGitCommit
