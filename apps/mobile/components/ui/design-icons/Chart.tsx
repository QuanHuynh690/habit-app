import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgChart = (props: IconProps) => (
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
      d="M16.676 2H7.333C3.93 2 2 3.929 2 7.333v9.334C2 20.07 3.929 22 7.333 22h9.343C20.08 22 22 20.071 22 16.667V7.333C22 3.93 20.08 2 16.676 2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M12.035 6.089a.833.833 0 0 0-.826.836v10.15a.83.83 0 0 0 1.662 0V6.926a.835.835 0 0 0-.836-.836M7.37 9.369a.833.833 0 0 0-.827.835v6.872a.83.83 0 0 0 1.662 0v-6.872a.835.835 0 0 0-.835-.835m8.435 4.462c0-.462.374-.835.836-.835.453 0 .826.373.826.835v3.245a.83.83 0 0 1-1.662 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgChart;
