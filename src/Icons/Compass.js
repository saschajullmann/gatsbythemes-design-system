import React from 'react'
import Svg from './Svg'
export const SvgCompass = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="compass_svg__feather compass_svg__feather-compass"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </Svg>
)
SvgCompass.isIcon = true
SvgCompass.defaultProps = {
  size: 24
}
export default SvgCompass
