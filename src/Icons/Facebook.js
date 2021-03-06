import React from 'react'
import Svg from './Svg'
export const SvgFacebook = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="facebook_svg__feather facebook_svg__feather-facebook"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Svg>
)
SvgFacebook.isIcon = true
SvgFacebook.defaultProps = {
  size: 24
}
export default SvgFacebook
