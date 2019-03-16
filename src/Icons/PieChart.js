import React from 'react'
import Svg from './Svg'
export const SvgPieChart = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pie-chart_svg__feather pie-chart_svg__feather-pie-chart"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z" />
  </Svg>
)
SvgPieChart.isIcon = true
SvgPieChart.defaultProps = {
  size: 24
}
export default SvgPieChart
