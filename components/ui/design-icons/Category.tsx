import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgCategory = (props: SvgProps) => (
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
      d="M16.075 2h3.386A2.55 2.55 0 0 1 22 4.56v3.415a2.55 2.55 0 0 1-2.539 2.56h-3.386a2.55 2.55 0 0 1-2.538-2.56V4.56A2.55 2.55 0 0 1 16.075 2"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M4.539 2h3.385a2.55 2.55 0 0 1 2.539 2.56v3.415a2.55 2.55 0 0 1-2.539 2.56H4.54A2.55 2.55 0 0 1 2 7.974V4.56A2.55 2.55 0 0 1 4.539 2m0 11.466h3.385a2.55 2.55 0 0 1 2.539 2.56v3.414A2.55 2.55 0 0 1 7.924 22H4.54A2.55 2.55 0 0 1 2 19.44v-3.415a2.55 2.55 0 0 1 2.539-2.56m14.923 0h-3.386a2.55 2.55 0 0 0-2.539 2.56v3.414A2.55 2.55 0 0 0 16.076 22h3.386A2.55 2.55 0 0 0 22 19.44v-3.415a2.55 2.55 0 0 0-2.538-2.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCategory;
