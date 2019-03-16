import React from 'react'
import Svg from './Svg'
export const SvgLinkedin = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="linkedin_svg__feather linkedin_svg__feather-linkedin"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx={4} cy={4} r={2} />
  </Svg>
)
SvgLinkedin.isIcon = true
SvgLinkedin.defaultProps = {
  size: 24
}
export default SvgLinkedin
