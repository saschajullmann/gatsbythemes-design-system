import React from 'react'
import Svg from './Svg'
export const SvgPrinter = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="printer_svg__feather printer_svg__feather-printer"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <path d="M6 14h12v8H6z" />
  </Svg>
)
SvgPrinter.isIcon = true
SvgPrinter.defaultProps = {
  size: 24
}
export default SvgPrinter
