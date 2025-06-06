import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgNotification = (props: IconProps) => (
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
      d="M14.009 19.228c-.5-.106-3.546-.106-4.046 0-.428.1-.89.329-.89.832.025.48.306.905.696 1.174h-.001a3.64 3.64 0 0 0 1.714.733q.495.066 1.008 0c.618-.09 1.21-.34 1.714-.732l-.001-.001c.39-.27.67-.693.695-1.174 0-.503-.462-.733-.89-.832"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M19.77 11.645c-.731-.853-1.063-1.592-1.063-2.848V8.37c0-1.636-.377-2.69-1.195-3.745C16.249 2.987 14.124 2 12.044 2h-.088c-2.037 0-4.095.942-5.379 2.513-.864 1.075-1.284 2.175-1.284 3.857v.427c0 1.256-.31 1.995-1.063 2.848-.553.629-.73 1.437-.73 2.31 0 .876.287 1.705.864 2.379a4.53 4.53 0 0 0 2.9 1.413c1.571.179 3.142.246 4.737.246 1.593 0 3.164-.112 4.736-.246a4.53 4.53 0 0 0 2.9-1.413 3.6 3.6 0 0 0 .863-2.378c0-.874-.177-1.682-.73-2.31"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgNotification;
