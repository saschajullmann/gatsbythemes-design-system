import React from 'react'
import Svg from './Svg'
export const SvgChevronsUp = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevrons-up_svg__feather chevrons-up_svg__feather-chevrons-up"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
  </Svg>
)
SvgChevronsUp.isIcon = true
SvgChevronsUp.defaultProps = {
  size: 24
}
export default SvgChevronsUp
