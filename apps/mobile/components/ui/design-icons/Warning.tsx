import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgWarning = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#CDCDD0"
      d="M9.317 4.66c1.105-2.212 4.261-2.212 5.367 0l5.996 11.999c.997 1.995-.453 4.34-2.683 4.34H6.003c-2.23 0-3.68-2.346-2.683-4.34z"
    />
    <Path
      fill={props.color || "#040415"}
      d="M12 8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1M12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </Svg>
);
export default SvgWarning;
