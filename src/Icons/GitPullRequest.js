import React from 'react'
import Svg from './Svg'
export const SvgGitPullRequest = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="git-pull-request_svg__feather git-pull-request_svg__feather-git-pull-request"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={18} cy={18} r={3} />
    <circle cx={6} cy={6} r={3} />
    <path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12" />
  </Svg>
)
SvgGitPullRequest.isIcon = true
SvgGitPullRequest.defaultProps = {
  size: 24
}
export default SvgGitPullRequest
