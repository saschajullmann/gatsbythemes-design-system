import React from 'react'
import Svg from './Svg'
export const SvgKey = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="key_svg__feather key_svg__feather-key"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </Svg>
)
SvgKey.isIcon = true
SvgKey.defaultProps = {
  size: 24
}
export default SvgKey
