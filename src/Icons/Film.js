import React from 'react'
import Svg from './Svg'
export const SvgFilm = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="film_svg__feather film_svg__feather-film"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect x={2} y={2} width={20} height={20} rx={2.18} ry={2.18} />
    <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
  </Svg>
)
SvgFilm.isIcon = true
SvgFilm.defaultProps = {
  size: 24
}
export default SvgFilm
