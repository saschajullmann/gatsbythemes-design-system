import React from 'react'
import Svg from './Svg'
export const SvgSliders = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="sliders_svg__feather sliders_svg__feather-sliders"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
  </Svg>
)
SvgSliders.isIcon = true
SvgSliders.defaultProps = {
  size: 24
}
export default SvgSliders
