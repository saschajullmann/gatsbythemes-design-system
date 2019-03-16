import React from 'react'
import Svg from './Svg'
export const SvgLoader = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="loader_svg__feather loader_svg__feather-loader"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </Svg>
)
SvgLoader.isIcon = true
SvgLoader.defaultProps = {
  size: 24
}
export default SvgLoader
