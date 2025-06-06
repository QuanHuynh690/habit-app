import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowDownSquare = (props: IconProps) => (
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
      d="M2 7.916v8.168C2 19.623 4.276 22 7.665 22h8.67C19.724 22 22 19.623 22 16.084V7.916C22 4.378 19.723 2 16.334 2H7.665C4.276 2 2 4.378 2 7.916"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="m7.72 12.855 3.749 3.765a.773.773 0 0 0 1.064 0l3.748-3.765a.75.75 0 0 0-1.064-1.059l-2.467 2.477V7.918a.75.75 0 1 0-1.5 0v6.355l-2.466-2.477a.75.75 0 0 0-1.061-.002.75.75 0 0 0-.002 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowDownSquare;
