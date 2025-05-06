import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgHeart1 = (props: SvgProps) => (
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
      d="M11.776 21.837a36.3 36.3 0 0 1-6.328-4.957 12.7 12.7 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.28 6.28 0 0 1 12.007 4.3a6.29 6.29 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.7 12.7 0 0 1-3.013 4.805 36.6 36.6 0 0 1-6.328 4.957l-.25.163z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHeart1;
