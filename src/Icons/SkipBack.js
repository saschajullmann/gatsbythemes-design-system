import React from 'react'
import Svg from './Svg'
export const SvgSkipBack = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="skip-back_svg__feather skip-back_svg__feather-skip-back"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 20L9 12l10-8v16zM5 19V5" />
  </Svg>
)
SvgSkipBack.isIcon = true
SvgSkipBack.defaultProps = {
  size: 24
}
export default SvgSkipBack
