import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgPie04 = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#CDCDD0"
      d="M13 21c0 .552.45 1.006.998.945a9 9 0 0 0 7.947-7.947c.06-.549-.393-.998-.945-.998h-7a1 1 0 0 0-1 1z"
    />
    <Path
      fill="#040415"
      d="M21 11c.552 0 1.006-.45.945-.998a9 9 0 0 0-7.947-7.947C13.449 1.995 13 2.448 13 3v7a1 1 0 0 0 1 1z"
    />
    <Path
      fill="#CDCDD0"
      d="M11 4c0-.552-.45-1.006-.998-.945a9 9 0 0 0 0 17.89c.549.06.998-.393.998-.945z"
    />
  </Svg>
);
export default SvgPie04;
