import React from 'react'
import Svg from './Svg'
export const SvgLogIn = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="log-in_svg__feather log-in_svg__feather-log-in"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
  </Svg>
)
SvgLogIn.isIcon = true
SvgLogIn.defaultProps = {
  size: 24
}
export default SvgLogIn
