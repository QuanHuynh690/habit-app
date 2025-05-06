import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const SvgViewStream = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Rect width={16} height={16} x={4} y={4} fill="#040415" rx={4} />
  </Svg>
);
export default SvgViewStream;
