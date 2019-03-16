import React from 'react'
import Svg from './Svg'
export const SvgDroplet = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="droplet_svg__feather droplet_svg__feather-droplet"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </Svg>
)
SvgDroplet.isIcon = true
SvgDroplet.defaultProps = {
  size: 24
}
export default SvgDroplet
