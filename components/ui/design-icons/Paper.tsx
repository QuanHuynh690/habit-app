import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgPaper = (props: SvgProps) => (
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
      d="M18.132 9.017q.38.004.677.004c.222 0 .547-.003.87-.005l.369-.003a.453.453 0 0 1 .452.458v8.031c0 2.485-1.994 4.498-4.454 4.498H8.17c-2.58 0-4.67-2.111-4.67-4.716V6.509C3.5 4.026 5.495 2 7.964 2h5.289c.25 0 .453.206.453.459v3.216c0 1.833 1.493 3.336 3.309 3.336q.627 0 1.116.006M15.263 2.9c0-.43.522-.645.821-.334l4.026 4.187a.477.477 0 0 1-.343.808c-.822.002-1.79 0-2.487-.008a2.026 2.026 0 0 1-2.017-2.016z"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M8.974 11.388h3.385a.745.745 0 1 0 0-1.49H8.974a.745.745 0 0 0 0 1.49m0 4.994h5.444a.745.745 0 1 0 0-1.49H8.974a.745.745 0 0 0 0 1.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPaper;
