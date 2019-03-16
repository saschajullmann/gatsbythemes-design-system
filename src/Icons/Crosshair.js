import React from 'react'
import Svg from './Svg'
export const SvgCrosshair = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="crosshair_svg__feather crosshair_svg__feather-crosshair"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
  </Svg>
)
SvgCrosshair.isIcon = true
SvgCrosshair.defaultProps = {
  size: 24
}
export default SvgCrosshair
