import React from 'react'
import Svg from './Svg'
export const SvgPhoneMissed = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="phone-missed_svg__feather phone-missed_svg__feather-phone-missed"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 1l-6 6M17 1l6 6M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
)
SvgPhoneMissed.isIcon = true
SvgPhoneMissed.defaultProps = {
  size: 24
}
export default SvgPhoneMissed
