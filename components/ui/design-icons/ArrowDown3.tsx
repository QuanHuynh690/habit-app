import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowDown3 = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill={props.secondColor || "#CDCDD0"}
      fillRule="evenodd"
      d="M12.66 3.71v8.479a.71.71 0 0 1-1.422 0V3.71a.71.71 0 0 1 1.421 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M17.397 12.19a.7.7 0 0 1-.109.378l-4.738 7.518a.712.712 0 0 1-1.203 0l-4.738-7.518a.71.71 0 0 1-.02-.722.71.71 0 0 1 .622-.367h9.475a.71.71 0 0 1 .71.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowDown3;
