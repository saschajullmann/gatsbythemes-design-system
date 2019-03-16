import React from 'react'
import Svg from './Svg'
export const SvgUmbrella = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="umbrella_svg__feather umbrella_svg__feather-umbrella"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
  </Svg>
)
SvgUmbrella.isIcon = true
SvgUmbrella.defaultProps = {
  size: 24
}
export default SvgUmbrella
