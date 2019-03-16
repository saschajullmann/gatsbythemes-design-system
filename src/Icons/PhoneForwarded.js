import React from 'react'
import Svg from './Svg'
export const SvgPhoneForwarded = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="phone-forwarded_svg__feather phone-forwarded_svg__feather-phone-forwarded"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 1l4 4-4 4M15 5h8M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
)
SvgPhoneForwarded.isIcon = true
SvgPhoneForwarded.defaultProps = {
  size: 24
}
export default SvgPhoneForwarded
