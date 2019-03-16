import React from 'react'
import Svg from './Svg'
export const SvgChrome = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chrome_svg__feather chrome_svg__feather-chrome"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={4} />
    <path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14" />
  </Svg>
)
SvgChrome.isIcon = true
SvgChrome.defaultProps = {
  size: 24
}
export default SvgChrome
