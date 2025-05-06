import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgFullScreen = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Rect width={22} height={18} x={1} y={3} fill="#CDCDD0" rx={4} />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M5 6a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8h3a1 1 0 0 0 0-2zm10 10a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFullScreen;
