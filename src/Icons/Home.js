import React from 'react'
import Svg from './Svg'
export const SvgHome = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="home_svg__feather home_svg__feather-home"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </Svg>
)
SvgHome.isIcon = true
SvgHome.defaultProps = {
  size: 24
}
export default SvgHome
