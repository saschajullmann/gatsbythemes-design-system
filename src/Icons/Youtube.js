import React from 'react'
import Svg from './Svg'
export const SvgYoutube = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="youtube_svg__feather youtube_svg__feather-youtube"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
  </Svg>
)
SvgYoutube.isIcon = true
SvgYoutube.defaultProps = {
  size: 24
}
export default SvgYoutube
