import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { IconProps } from "./2User";
const SvgViewList = (props: IconProps) => (
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
      d="M13 6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm-9 9a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    />
    <Rect width={7} height={7} x={4} y={4} fill={props.color || "#040415"} rx={2} />
  </Svg>
);
export default SvgViewList;
