import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const SvgCard = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Rect width={20} height={16} x={2} y={4} fill="#CDCDD0" rx={4} />
    <Rect width={6} height={2} x={12} y={14} fill="#040415" rx={1} />
  </Svg>
);
export default SvgCard;
