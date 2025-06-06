import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgDownload = (props: IconProps) => (
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
      d="M17.554 7.296c2.451 0 4.446 2.06 4.446 4.592v5.032c0 2.525-1.99 4.58-4.436 4.58H6.448C3.996 21.5 2 19.441 2 16.91v-5.033c0-2.525 1.991-4.58 4.438-4.58h11.116"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="m12.546 16.037 2.91-2.967c.3-.307.3-.8-.003-1.107a.76.76 0 0 0-1.089.002l-1.593 1.626V3.282a.777.777 0 0 0-.77-.782.776.776 0 0 0-.77.782v10.309l-1.594-1.626a.76.76 0 0 0-1.089-.002.79.79 0 0 0-.002 1.107l2.91 2.967c.144.148.34.231.544.231a.77.77 0 0 0 .546-.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDownload;
