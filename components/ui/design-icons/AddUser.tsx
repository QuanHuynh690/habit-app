import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgAddUser = (props: IconProps) => (
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
      d="M9.5 12.554c2.755 0 4.963-2.236 4.963-5.026S12.255 2.5 9.5 2.5 4.537 4.738 4.537 7.528s2.208 5.026 4.963 5.026"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M19.898 9.588H21.1c.495 0 .899.41.899.912a.907.907 0 0 1-.899.911h-1.203v1.177a.906.906 0 0 1-.899.912.907.907 0 0 1-.899-.912v-1.177h-1.201A.906.906 0 0 1 16 10.5c0-.502.403-.911.899-.911H18.1V8.412c0-.503.404-.912.899-.912.496 0 .899.41.899.912zM2 18.247c0-2.585 3.454-3.232 7.5-3.232 4.067 0 7.5.67 7.5 3.254S13.545 21.5 9.5 21.5c-4.067 0-7.5-.67-7.5-3.253"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAddUser;
