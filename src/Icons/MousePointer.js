import React from 'react'
import Svg from './Svg'
export const SvgMousePointer = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mouse-pointer_svg__feather mouse-pointer_svg__feather-mouse-pointer"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6" />
  </Svg>
)
SvgMousePointer.isIcon = true
SvgMousePointer.defaultProps = {
  size: 24
}
export default SvgMousePointer
