import * as React from "react";
import Svg, { Rect } from "react-native-svg";
import { IconProps } from "./2User";
const SvgMobile = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Rect width={16} height={20} x={4} y={2} fill="#CDCDD0" rx={4} />
    <Rect width={2} height={2} x={11} y={16} fill={props.color || "#040415"} rx={1} />
  </Svg>
);
export default SvgMobile;
