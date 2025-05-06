import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgArrowLeft2 = (props: SvgProps) => (
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
      d="M14.825 15.96a.62.62 0 0 1 .001.86.59.59 0 0 1-.776.061l-.067-.058-4.808-4.891a.62.62 0 0 1-.058-.795l.058-.068 4.808-4.892a.587.587 0 0 1 .843.002c.211.217.23.555.056.793l-.057.068-4.384 4.46z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowLeft2;
