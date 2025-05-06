import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgGift = (props: SvgProps) => (
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
      d="M13 22v-8h6v6a2 2 0 0 1-2 2zM11 8v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.535A4 4 0 0 1 12 3.354 4 4 0 0 1 18.465 8H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6V8zm0 14H7a2 2 0 0 1-2-2v-6h6zm0-14V6a2 2 0 1 0-2 2zm2 0h2a2 2 0 1 0-2-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgGift;
