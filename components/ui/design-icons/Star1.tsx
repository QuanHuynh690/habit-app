import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgStar1 = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="m12.976 3.114 2.227 4.474c.164.324.477.55.838.6l5.001.728c.292.04.557.195.736.43.177.232.253.526.21.815-.035.24-.148.462-.32.633l-3.625 3.512a1.06 1.06 0 0 0-.32.964l.892 4.938c.095.597-.3 1.159-.893 1.272a1.17 1.17 0 0 1-.714-.114l-4.46-2.324a1.17 1.17 0 0 0-1.054 0l-4.461 2.324a1.143 1.143 0 0 1-1.532-.447 1.13 1.13 0 0 1-.116-.7l.892-4.94a1.06 1.06 0 0 0-.321-.964l-3.624-3.51a1.084 1.084 0 0 1 0-1.562c.172-.175.398-.286.642-.315l5.001-.73c.36-.05.673-.274.838-.6l2.147-4.484a1.11 1.11 0 0 1 1.017-.614h.134c.373.045.698.276.865.614"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStar1;
