import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const SvgMenu = (props: SvgProps) => (
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
      d="M7 6a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm0 10a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
    <Rect width={18} height={2} x={3} y={11} fill="#040415" rx={1} />
  </Svg>
);
export default SvgMenu;
