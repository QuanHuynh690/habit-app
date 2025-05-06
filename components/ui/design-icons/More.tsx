import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgMore = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMore;
