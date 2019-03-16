import React from 'react'
import Svg from './Svg'
export const SvgRss = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rss_svg__feather rss_svg__feather-rss"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" />
    <circle cx={5} cy={19} r={1} />
  </Svg>
)
SvgRss.isIcon = true
SvgRss.defaultProps = {
  size: 24
}
export default SvgRss
