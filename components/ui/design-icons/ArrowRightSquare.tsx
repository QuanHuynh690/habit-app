import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowRightSquare = (props: IconProps) => (
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
      d="M7.916 22h8.168C19.623 22 22 19.724 22 16.335v-8.67C22 4.276 19.623 2 16.084 2H7.916C4.378 2 2 4.277 2 7.666v8.67C2 19.723 4.378 22 7.916 22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="m12.856 16.28 3.765-3.749a.773.773 0 0 0 0-1.064L12.856 7.72a.75.75 0 0 0-1.06 1.064l2.478 2.467H7.918a.75.75 0 1 0 0 1.5h6.356l-2.477 2.466a.75.75 0 0 0-.003 1.061.75.75 0 0 0 1.061.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowRightSquare;
