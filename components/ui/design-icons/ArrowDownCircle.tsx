import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgArrowDownCircle = (props: SvgProps) => (
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
      d="M22 12c0 5.515-4.486 10-10 10S2 17.515 2 12 6.486 2 12 2s10 4.486 10 10"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M16.22 10.558a.75.75 0 0 1-.218.528l-3.47 3.487a.75.75 0 0 1-1.063 0l-3.472-3.487a.749.749 0 1 1 1.063-1.058L12 12.983l2.94-2.953a.75.75 0 0 1 1.28.528"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowDownCircle;
