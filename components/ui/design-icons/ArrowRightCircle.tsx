import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgArrowRightCircle = (props: SvgProps) => (
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
      d="M12 2c5.515 0 10 4.486 10 10s-4.485 10-10 10S2 17.514 2 12 6.486 2 12 2"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M10.558 7.78c.19 0 .383.072.528.218l3.487 3.47a.75.75 0 0 1 0 1.063l-3.487 3.472a.749.749 0 1 1-1.058-1.063L12.983 12l-2.953-2.94a.75.75 0 0 1 .528-1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowRightCircle;
