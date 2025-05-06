import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgBell = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path fill="#040415" d="M10 20h4a2 2 0 1 1-4 0" />
    <Path
      fill="#CDCDD0"
      d="M13.004 4h-2.008l-1.027.37A6 6 0 0 0 6 10.014v3.32c0 .734-.345 1.425-.931 1.866C3.02 16.741 4.11 20 6.672 20h10.657c2.561 0 3.65-3.26 1.603-4.799A2.33 2.33 0 0 1 18 13.335v-3.32a6 6 0 0 0-3.969-5.646z"
    />
    <Path fill="#040415" d="M11 3a1 1 0 1 1 2 0v1h-2z" />
  </Svg>
);
export default SvgBell;
