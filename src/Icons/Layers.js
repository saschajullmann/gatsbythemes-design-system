import React from 'react'
import Svg from './Svg'
export const SvgLayers = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="layers_svg__feather layers_svg__feather-layers"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </Svg>
)
SvgLayers.isIcon = true
SvgLayers.defaultProps = {
  size: 24
}
export default SvgLayers
