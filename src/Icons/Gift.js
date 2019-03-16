import React from 'react'
import Svg from './Svg'
export const SvgGift = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="gift_svg__feather gift_svg__feather-gift"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </Svg>
)
SvgGift.isIcon = true
SvgGift.defaultProps = {
  size: 24
}
export default SvgGift
