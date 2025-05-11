import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgTickSquare = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M10.662 16a.94.94 0 0 1-.698-.315L7.29 12.763a1.147 1.147 0 0 1 0-1.524.928.928 0 0 1 1.395 0l1.978 2.16 4.654-5.083a.928.928 0 0 1 1.395 0 1.15 1.15 0 0 1 0 1.525l-5.351 5.844a.94.94 0 0 1-.698.315"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTickSquare;
