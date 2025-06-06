import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgDiscovery = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill="#CDCDD0"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.478 10 10"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="m15.86 8.705-1.62 5.12c-.06.21-.23.38-.44.44l-5.1 1.6a.448.448 0 0 1-.56-.56l1.6-5.13c.06-.21.23-.37.44-.44l5.12-1.6c.35-.11.67.22.56.57"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDiscovery;
