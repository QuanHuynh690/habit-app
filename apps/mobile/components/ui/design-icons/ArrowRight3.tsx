import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgArrowRight3 = (props: IconProps) => (
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
      d="M3.711 11.34h8.478a.71.71 0 0 1 0 1.422H3.711a.71.71 0 0 1 0-1.421"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M12.189 6.603c.133 0 .263.037.379.109l7.518 4.738a.712.712 0 0 1 0 1.203l-7.518 4.738a.71.71 0 0 1-1.09-.602V7.314a.71.71 0 0 1 .711-.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowRight3;
