import React from 'react'
import Svg from './Svg'
export const SvgMaximize = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="maximize_svg__feather maximize_svg__feather-maximize"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </Svg>
)
SvgMaximize.isIcon = true
SvgMaximize.defaultProps = {
  size: 24
}
export default SvgMaximize
