import React from 'react'
import Svg from './Svg'
export const SvgFastForward = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="fast-forward_svg__feather fast-forward_svg__feather-fast-forward"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z" />
  </Svg>
)
SvgFastForward.isIcon = true
SvgFastForward.defaultProps = {
  size: 24
}
export default SvgFastForward
