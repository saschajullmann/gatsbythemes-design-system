import React from 'react'
import Svg from './Svg'
export const SvgBarChart = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bar-chart_svg__feather bar-chart_svg__feather-bar-chart"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </Svg>
)
SvgBarChart.isIcon = true
SvgBarChart.defaultProps = {
  size: 24
}
export default SvgBarChart
