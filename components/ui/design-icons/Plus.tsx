import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgPlus = (props: SvgProps) => (
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
      d="M12.75 12.708v4.549c0 .41-.336.743-.75.743a.746.746 0 0 1-.75-.743v-4.549H6.68a.753.753 0 0 1-.68-.747c0-.385.293-.707.68-.747h4.562v-4.54A.755.755 0 0 1 11.996 6c.388 0 .713.29.753.674v4.54h4.571c.387.04.68.362.68.747a.753.753 0 0 1-.68.747z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlus;
