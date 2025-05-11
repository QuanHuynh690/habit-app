import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "./2User";
const SvgSearch1 = (props: IconProps) => (
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
      d="M18.848 19.961a1.15 1.15 0 0 1-.772-.333l-1.77-2.06a.94.94 0 0 1-.07-1.317.85.85 0 0 1 1.206 0l2.225 1.774A1.164 1.164 0 0 1 18.895 20z"
      clipRule="evenodd"
    />
    <Circle cx={11} cy={11} r={7} fill={props.color || "#040415"} />
  </Svg>
);
export default SvgSearch1;
