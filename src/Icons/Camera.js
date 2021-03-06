import React from 'react'
import Svg from './Svg'
export const SvgCamera = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="camera_svg__feather camera_svg__feather-camera"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx={12} cy={13} r={4} />
  </Svg>
)
SvgCamera.isIcon = true
SvgCamera.defaultProps = {
  size: 24
}
export default SvgCamera
