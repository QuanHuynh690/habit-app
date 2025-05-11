import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgClose = (props: IconProps) => (
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
      d="M16.243 7.757a1 1 0 0 0-1.415 0L12 10.586 9.172 7.757a1 1 0 0 0-1.415 1.415L10.586 12l-2.829 2.828a1 1 0 1 0 1.415 1.415L12 13.414l2.828 2.829a1 1 0 1 0 1.415-1.415L13.414 12l2.829-2.828a1 1 0 0 0 0-1.415"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgClose;
