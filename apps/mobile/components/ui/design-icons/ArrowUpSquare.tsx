import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowUpSquare = (props: IconProps) => (
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
      d="M22 16.084V7.916C22 4.377 19.724 2 16.335 2h-8.67C4.276 2 2 4.377 2 7.916v8.168C2 19.622 4.277 22 7.666 22h8.669C19.724 22 22 19.622 22 16.084"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M16.28 11.145 12.53 7.38a.773.773 0 0 0-1.064 0L7.72 11.145a.75.75 0 0 0 1.064 1.059l2.467-2.477v6.355a.75.75 0 1 0 1.5 0V9.727l2.466 2.477a.75.75 0 0 0 1.061.002.75.75 0 0 0 .002-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowUpSquare;
