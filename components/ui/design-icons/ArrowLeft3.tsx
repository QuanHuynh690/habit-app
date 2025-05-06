import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgArrowLeft3 = (props: SvgProps) => (
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
      d="M20.289 12.66h-8.478a.71.71 0 0 1 0-1.422h8.478a.71.71 0 0 1 0 1.421"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M11.811 17.397a.7.7 0 0 1-.379-.109L3.914 12.55a.712.712 0 0 1 0-1.203l7.518-4.738a.71.71 0 0 1 .722-.02.71.71 0 0 1 .367.622v9.475a.71.71 0 0 1-.71.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowLeft3;
