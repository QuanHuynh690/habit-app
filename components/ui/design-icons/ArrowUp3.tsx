import * as React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowUp3 = (props: IconProps) => (
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
      d="M11.34 20.29V11.81a.71.71 0 0 1 1.422 0v8.478a.71.71 0 0 1-1.421 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M6.603 11.81c0-.132.037-.263.109-.378l4.738-7.518a.712.712 0 0 1 1.203 0l4.738 7.518a.71.71 0 0 1-.602 1.09H7.314a.71.71 0 0 1-.71-.711"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowUp3;
