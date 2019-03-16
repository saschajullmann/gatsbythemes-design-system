import React from 'react'
import Svg from './Svg'
export const SvgHardDrive = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="hard-drive_svg__feather hard-drive_svg__feather-hard-drive"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 12H2M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zM6 16h0M10 16h0" />
  </Svg>
)
SvgHardDrive.isIcon = true
SvgHardDrive.defaultProps = {
  size: 24
}
export default SvgHardDrive
