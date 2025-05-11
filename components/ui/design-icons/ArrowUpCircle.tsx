import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowUpCircle = (props: IconProps) => (
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
      d="M2 12C2 6.485 6.486 2 12 2s10 4.485 10 10-4.486 10-10 10S2 17.514 2 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M7.78 13.443c0-.191.072-.383.218-.53l3.47-3.486a.75.75 0 0 1 1.063 0l3.472 3.487a.749.749 0 1 1-1.063 1.058L12 11.019l-2.94 2.953a.75.75 0 0 1-1.28-.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowUpCircle;
