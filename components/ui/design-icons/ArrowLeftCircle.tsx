import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgArrowLeftCircle = (props: SvgProps) => (
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
      d="M12 22C6.485 22 2 17.514 2 12S6.485 2 12 2s10 4.486 10 10-4.486 10-10 10"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M13.443 16.22a.75.75 0 0 1-.53-.218l-3.486-3.47a.75.75 0 0 1 0-1.063l3.487-3.472a.749.749 0 1 1 1.058 1.063L11.019 12l2.953 2.94a.75.75 0 0 1-.53 1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowLeftCircle;
