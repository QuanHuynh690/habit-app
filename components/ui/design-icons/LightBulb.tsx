import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgLightBulb = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#CDCDD0"
      d="M16 16.93a8 8 0 1 0-8 0V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"
    />
    <Path
      fill={props.color || "#040415"}
      d="M9 19h6v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM10.707 10.293a1 1 0 1 0-1.414 1.414L11 13.414V19h2v-5.586l1.707-1.707a1 1 0 0 0-1.414-1.414L12 11.586z"
    />
  </Svg>
);
export default SvgLightBulb;
