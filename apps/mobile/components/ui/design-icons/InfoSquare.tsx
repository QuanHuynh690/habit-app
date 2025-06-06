import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./2User";
const SvgInfoSquare = (props: IconProps) => (
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
      d="M11.125 8.19a.878.878 0 0 0 1.755 0 .876.876 0 0 0-.875-.876.88.88 0 0 0-.88.875m1.745 3.172a.877.877 0 0 0-.875-.875.877.877 0 0 0-.875.875v4.42c0 .482.393.875.875.875a.877.877 0 0 0 .875-.875z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgInfoSquare;
