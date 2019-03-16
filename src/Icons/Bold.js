import React from 'react'
import Svg from './Svg'
export const SvgBold = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bold_svg__feather bold_svg__feather-bold"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6zM6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
  </Svg>
)
SvgBold.isIcon = true
SvgBold.defaultProps = {
  size: 24
}
export default SvgBold
