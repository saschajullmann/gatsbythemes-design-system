import React from 'react'
import Svg from './Svg'
export const SvgPercent = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="percent_svg__feather percent_svg__feather-percent"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 5L5 19" />
    <circle cx={6.5} cy={6.5} r={2.5} />
    <circle cx={17.5} cy={17.5} r={2.5} />
  </Svg>
)
SvgPercent.isIcon = true
SvgPercent.defaultProps = {
  size: 24
}
export default SvgPercent
