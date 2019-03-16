import React from 'react'
import Svg from './Svg'
export const SvgInstagram = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="instagram_svg__feather instagram_svg__feather-instagram"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h0" />
  </Svg>
)
SvgInstagram.isIcon = true
SvgInstagram.defaultProps = {
  size: 24
}
export default SvgInstagram
