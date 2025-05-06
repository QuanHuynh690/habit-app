import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgPlay = (props: SvgProps) => (
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
      d="M18.557 13.319c-.068.068-.323.355-.563.595-1.397 1.497-5.046 3.945-6.954 4.694-.29.12-1.023.374-1.415.392q-.563 0-1.074-.256a2.2 2.2 0 0 1-.955-1.055c-.12-.306-.308-1.224-.308-1.241C7.102 15.444 7 13.812 7 12.008c0-1.717.102-3.282.255-4.303.017-.018.205-1.158.41-1.548A2.15 2.15 0 0 1 9.556 5h.069c.51.017 1.585.46 1.585.475 1.807.75 5.369 3.08 6.8 4.628 0 0 .405.399.58.647.273.357.41.799.41 1.241 0 .494-.153.952-.443 1.328"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlay;
