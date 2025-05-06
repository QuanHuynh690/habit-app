import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgTrashCan = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path fill="#CDCDD0" d="M19 8H5v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z" />
    <Path
      fill="#040415"
      d="M10 12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1M14 12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h3a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2zm2-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTrashCan;
