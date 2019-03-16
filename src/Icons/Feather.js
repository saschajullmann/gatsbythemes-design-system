import React from 'react'
import Svg from './Svg'
export const SvgFeather = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather_svg__feather feather_svg__feather-feather"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9" />
  </Svg>
)
SvgFeather.isIcon = true
SvgFeather.defaultProps = {
  size: 24
}
export default SvgFeather
