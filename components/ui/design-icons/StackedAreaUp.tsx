import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgStackedAreaUp = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#CDCDD0"
      d="M22 6.007c0-1.5-1.591-2.467-2.923-1.774l-4.866 2.53a1 1 0 0 1-.704.083l-2.875-.719a2 2 0 0 0-1.477.204L3.008 9.844A2 2 0 0 0 2 11.58V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
    />
    <Path
      fill="#040415"
      d="M9.125 13.328 2.65 15.757a1 1 0 0 0-.649.936V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a1 1 0 0 0-1.351-.936l-5.774 2.608a3 3 0 0 1-1.781.101l-2.188-.546a3 3 0 0 0-1.78.101"
    />
  </Svg>
);
export default SvgStackedAreaUp;
