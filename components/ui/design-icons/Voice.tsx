import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgVoice = (props: SvgProps) => (
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
      d="M19.531 9.826a.96.96 0 0 0-.968.956c0 3.573-2.944 6.48-6.562 6.48-3.62 0-6.564-2.907-6.564-6.48a.96.96 0 0 0-.968-.956.96.96 0 0 0-.969.956c0 4.305 3.3 7.86 7.532 8.337v1.924c0 .528.433.957.969.957a.963.963 0 0 0 .968-.957V19.12c4.232-.478 7.531-4.032 7.531-8.337a.96.96 0 0 0-.969-.956"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M11.825 15.217h.35c2.403 0 4.352-1.924 4.352-4.296V6.297c0-2.374-1.95-4.297-4.352-4.297h-.35C9.422 2 7.473 3.923 7.473 6.297v4.624c0 2.372 1.95 4.296 4.352 4.296"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgVoice;
