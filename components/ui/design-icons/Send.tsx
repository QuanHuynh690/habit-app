import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgSend = (props: IconProps) => (
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
      d="M3.01 16.808a.749.749 0 0 1-.53-1.28l1.365-1.366a.75.75 0 0 1 1.061 0 .75.75 0 0 1 0 1.06L3.54 16.589a.74.74 0 0 1-.53.22M6.772 18a.749.749 0 0 1-.53-1.28l1.365-1.366a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.061L7.303 17.78a.74.74 0 0 1-.53.22m.253 3.568c.146.147.338.22.53.22a.74.74 0 0 0 .53-.22l1.366-1.365a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.366 1.365a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M21.427 2.578c-.5-.51-1.24-.7-1.93-.5l-16.09 4.65a1.91 1.91 0 0 0-1.383 1.51c-.142.746.354 1.694 1.002 2.09L8.057 13.4a1.31 1.31 0 0 0 1.61-.19l5.76-5.762a.735.735 0 0 1 1.06 0c.29.29.29.76 0 1.06l-5.77 5.761a1.31 1.31 0 0 0-.194 1.61l3.074 5.05c.36.598.98.94 1.66.94.08 0 .17 0 .25-.012.78-.099 1.4-.63 1.63-1.38l4.77-15.969c.21-.68.02-1.42-.48-1.93"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSend;
