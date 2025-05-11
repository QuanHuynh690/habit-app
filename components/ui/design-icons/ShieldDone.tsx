import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgShieldDone = (props: IconProps) => (
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
      d="M12.087 22a.8.8 0 0 1-.36-.086L8.126 20.05c-1.022-.53-1.821-1.124-2.445-1.816a8.24 8.24 0 0 1-2.139-5.474L3.5 6.124a1.81 1.81 0 0 1 1.228-1.712l6.613-2.305c.392-.14.83-.142 1.23-.007l6.637 2.227c.743.248 1.245.93 1.25 1.695l.042 6.64a8.24 8.24 0 0 1-2.066 5.496c-.617.702-1.41 1.305-2.421 1.845l-3.57 1.906a.77.77 0 0 1-.357.091"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M11.32 14.32a.76.76 0 0 1-.537-.21l-1.916-1.844a.72.72 0 0 1-.006-1.04.77.77 0 0 1 1.068-.007l1.379 1.326 3.368-3.32a.77.77 0 0 1 1.068-.007c.297.286.3.752.007 1.04l-3.9 3.844a.76.76 0 0 1-.532.219"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShieldDone;
