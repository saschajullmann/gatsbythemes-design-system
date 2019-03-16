import React from 'react'
import Svg from './Svg'
export const SvgLink2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="link-2_svg__feather link-2_svg__feather-link-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3M8 12h8" />
  </Svg>
)
SvgLink2.isIcon = true
SvgLink2.defaultProps = {
  size: 24
}
export default SvgLink2
