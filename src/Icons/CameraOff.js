import React from 'react'
import Svg from './Svg'
export const SvgCameraOff = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="camera-off_svg__feather camera-off_svg__feather-camera-off"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M1 1l22 22M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" />
  </Svg>
)
SvgCameraOff.isIcon = true
SvgCameraOff.defaultProps = {
  size: 24
}
export default SvgCameraOff
