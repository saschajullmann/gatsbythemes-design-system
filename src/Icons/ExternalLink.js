import React from 'react'
import Svg from './Svg'
export const SvgExternalLink = ({ size, ...props }) => (
  <Svg
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="external-link_svg__feather external-link_svg__feather-external-link"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </Svg>
)
SvgExternalLink.isIcon = true
SvgExternalLink.defaultProps = {
  size: 24
}
export default SvgExternalLink
