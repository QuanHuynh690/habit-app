import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowLeftSquare = (props: IconProps) => (
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
      d="M16.084 2H7.916C4.377 2 2 4.276 2 7.665v8.67C2 19.724 4.377 22 7.916 22h8.168C19.622 22 22 19.723 22 16.334v-8.67C22 4.277 19.622 2 16.084 2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M11.145 7.72 7.38 11.47a.773.773 0 0 0 0 1.064l3.765 3.748a.75.75 0 0 0 1.059-1.064L9.727 12.75h6.354a.75.75 0 1 0 0-1.5H9.728l2.476-2.466a.75.75 0 0 0 .003-1.061.75.75 0 0 0-1.061-.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowLeftSquare;
