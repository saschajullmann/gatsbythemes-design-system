import React from 'react'
import Svg from './Svg'
export const SvgMail = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mail_svg__feather mail_svg__feather-mail"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </Svg>
)
SvgMail.isIcon = true
SvgMail.defaultProps = {
  size: 24
}
export default SvgMail
