import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgSetting = (props: IconProps) => (
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
      d="M21.23 14.37c-.194-.3-.47-.6-.828-.79-.286-.14-.47-.37-.633-.64-.521-.86-.215-1.99.654-2.5a2.027 2.027 0 0 0 .756-2.83l-.685-1.18a2.11 2.11 0 0 0-2.871-.76c-.9.48-2.055.16-2.576-.69-.163-.28-.255-.58-.235-.88.03-.39-.092-.76-.276-1.06A2.15 2.15 0 0 0 12.717 2h-1.44c-.747.02-1.431.42-1.81 1.04-.194.3-.306.67-.286 1.06.02.3-.071.6-.235.88-.521.85-1.676 1.17-2.565.69a2.124 2.124 0 0 0-2.882.76l-.685 1.18c-.582.99-.255 2.26.757 2.83.868.51 1.175 1.64.664 2.5-.174.27-.358.5-.644.64-.347.19-.654.49-.817.79-.379.62-.358 1.4.02 2.05l.705 1.2a2.13 2.13 0 0 0 1.82 1.04c.347 0 .755-.1 1.083-.3.255-.17.562-.23.899-.23 1.012 0 1.86.83 1.88 1.82 0 1.15.94 2.05 2.126 2.05h1.39c1.175 0 2.115-.9 2.115-2.05.03-.99.88-1.82 1.89-1.82.328 0 .634.06.9.23.327.2.726.3 1.084.3.725 0 1.43-.4 1.808-1.04l.716-1.2c.368-.67.398-1.43.02-2.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M12.012 14.83c-1.604 0-2.902-1.25-2.902-2.82s1.298-2.83 2.902-2.83 2.872 1.26 2.872 2.83-1.267 2.82-2.872 2.82"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSetting;
