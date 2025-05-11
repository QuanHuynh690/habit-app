import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowUp2 = (props: IconProps) => (
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
      d="M8.04 14.823a.615.615 0 0 1-.86.002.594.594 0 0 1-.061-.78l.058-.068 4.891-4.84a.616.616 0 0 1 .795-.059l.068.059 4.892 4.84a.594.594 0 0 1-.002.848.616.616 0 0 1-.793.057l-.068-.059-4.46-4.412z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowUp2;
