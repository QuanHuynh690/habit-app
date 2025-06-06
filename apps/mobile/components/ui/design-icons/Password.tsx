import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgPassword = (props: IconProps) => (
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
      d="M16.334 2H7.665C4.276 2 2 4.378 2 7.917v8.167C2 19.622 4.276 22 7.665 22h8.669C19.723 22 22 19.622 22 16.084V7.917C22 4.377 19.725 2 16.334 2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M11.314 11.249h5.7c.41 0 .75.34.75.75v1.85c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.1h-1.33v1.1c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.1h-2.12a2.58 2.58 0 0 1-2.47 1.85c-1.44 0-2.61-1.16-2.61-2.6 0-1.43 1.17-2.6 2.61-2.6 1.17 0 2.15.78 2.47 1.85m-3.58.75a1.105 1.105 0 0 0 2.21 0 1.105 1.105 0 0 0-2.21 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPassword;
