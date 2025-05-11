import * as React from "react";
import Svg, { Rect } from "react-native-svg";
import { IconProps } from "./2User";
const SvgViewStream = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Rect width={16} height={16} x={4} y={4} fill={props.color || "#040415"} rx={4} />
  </Svg>
);
export default SvgViewStream;
