import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgSearch = (props: IconProps) => (
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
      d="M12.793 12.793a1 1 0 0 1 1.414 0l6.5 6.5a1 1 0 0 1-1.414 1.414l-6.5-6.5a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
    <Path fill={props.color || "#040415"} d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14" />
  </Svg>
);
export default SvgSearch;
