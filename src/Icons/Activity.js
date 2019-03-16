import React from 'react'
import Svg from './Svg'
export const SvgActivity = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="activity_svg__feather activity_svg__feather-activity"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </Svg>
)
SvgActivity.isIcon = true
SvgActivity.defaultProps = {
  size: 24
}
export default SvgActivity
