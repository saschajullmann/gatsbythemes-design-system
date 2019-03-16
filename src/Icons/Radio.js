import React from 'react'
import Svg from './Svg'
export const SvgRadio = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="radio_svg__feather radio_svg__feather-radio"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={2} />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </Svg>
)
SvgRadio.isIcon = true
SvgRadio.defaultProps = {
  size: 24
}
export default SvgRadio
