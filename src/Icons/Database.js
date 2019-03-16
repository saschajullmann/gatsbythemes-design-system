import React from 'react'
import Svg from './Svg'
export const SvgDatabase = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="database_svg__feather database_svg__feather-database"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <ellipse cx={12} cy={5} rx={9} ry={3} />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </Svg>
)
SvgDatabase.isIcon = true
SvgDatabase.defaultProps = {
  size: 24
}
export default SvgDatabase
