import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgMoreSquare = (props: IconProps) => (
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
      d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M7.521 10.804c-.66 0-1.198.537-1.198 1.195a1.2 1.2 0 0 0 1.198 1.198A1.2 1.2 0 0 0 8.72 12c0-.66-.537-1.197-1.198-1.197m4.48 0c-.662 0-1.199.537-1.199 1.195A1.2 1.2 0 0 0 12 13.198 1.2 1.2 0 0 0 13.198 12c0-.66-.537-1.197-1.198-1.197m3.28 1.195a1.198 1.198 0 0 1 2.397 0 1.2 1.2 0 0 1-1.198 1.198A1.2 1.2 0 0 1 15.282 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMoreSquare;
