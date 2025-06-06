import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgHome = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#CDCDD0"
      d="M12.67 3.217a1.5 1.5 0 0 0-1.34 0l-5.5 2.75A1.5 1.5 0 0 0 5 7.31V18a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7.31a1.5 1.5 0 0 0-.83-1.343z"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M14 21h-4v-4a2 2 0 1 1 4 0zM3.106 8.447a1 1 0 0 0 1.341.447L12 5.118l7.553 3.776a1 1 0 1 0 .894-1.788l-8-4a1 1 0 0 0-.894 0l-8 4a1 1 0 0 0-.447 1.341"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHome;
