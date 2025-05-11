import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgColumn01Up = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <Path fill={props.color || "#040415"} d="M14 5a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0z" />
    <Path fill="#CDCDD0" d="M6 11a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0z" />
  </Svg>
);
export default SvgColumn01Up;
