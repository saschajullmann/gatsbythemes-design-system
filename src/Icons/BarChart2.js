import React from 'react'
import Svg from './Svg'
export const SvgBarChart2 = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bar-chart-2_svg__feather bar-chart-2_svg__feather-bar-chart-2"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </Svg>
)
SvgBarChart2.isIcon = true
SvgBarChart2.defaultProps = {
  size: 24
}
export default SvgBarChart2
