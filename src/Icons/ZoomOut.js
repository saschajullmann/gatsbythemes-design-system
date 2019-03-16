import React from 'react'
import Svg from './Svg'
export const SvgZoomOut = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="zoom-out_svg__feather zoom-out_svg__feather-zoom-out"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="M21 21l-4.35-4.35M8 11h6" />
  </Svg>
)
SvgZoomOut.isIcon = true
SvgZoomOut.defaultProps = {
  size: 24
}
export default SvgZoomOut
