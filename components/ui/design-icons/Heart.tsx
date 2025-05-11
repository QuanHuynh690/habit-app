import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgHeart = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#CDCDD0"
      d="M21.878 7.79Q22 8.379 22 9c0 7.351-6.671 10.806-9.116 11.825a2.28 2.28 0 0 1-1.768 0 19 19 0 0 1-1.093-.499C7.108 18.881 2 15.432 2 9a6 6 0 0 1 10-4.472A5.98 5.98 0 0 1 16 3a6.003 6.003 0 0 1 5.878 4.79"
    />
  </Svg>
);
export default SvgHeart;
