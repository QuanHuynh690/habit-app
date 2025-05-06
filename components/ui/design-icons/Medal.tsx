import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgMedal = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M7.26 9.848A6.98 6.98 0 0 1 12 8c1.828 0 3.492.7 4.74 1.848l3.07-5.63A1.5 1.5 0 0 0 18.493 2h-3.316a2 2 0 0 0-1.748 1.029L11.999 5.6 10.572 3.03A2 2 0 0 0 8.823 2H5.507A1.5 1.5 0 0 0 4.19 4.218z"
      clipRule="evenodd"
    />
    <Path
      fill="#12131A"
      fillOpacity={0.25}
      d="M19 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMedal;
