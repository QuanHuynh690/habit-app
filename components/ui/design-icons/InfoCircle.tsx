import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgInfoCircle = (props: SvgProps) => (
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
      d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M12.87 12.63a.877.877 0 0 1-.875.876.877.877 0 0 1-.875-.875V8.21c0-.482.393-.875.875-.875s.875.393.875.875zm-1.745 3.173a.878.878 0 0 1 1.755 0 .876.876 0 0 1-.875.875.88.88 0 0 1-.88-.875"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgInfoCircle;
