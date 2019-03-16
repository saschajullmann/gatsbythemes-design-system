import React from 'react'
import Svg from './Svg'
export const SvgVoicemail = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="voicemail_svg__feather voicemail_svg__feather-voicemail"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={5.5} cy={11.5} r={4.5} />
    <circle cx={18.5} cy={11.5} r={4.5} />
    <path d="M5.5 16h13" />
  </Svg>
)
SvgVoicemail.isIcon = true
SvgVoicemail.defaultProps = {
  size: 24
}
export default SvgVoicemail
