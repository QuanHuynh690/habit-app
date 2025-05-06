import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgBag = (props: SvgProps) => (
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
      d="M16.974 6.774A.5.5 0 0 1 16.93 7h-1.437a.7.7 0 0 1-.043-.226 3.48 3.48 0 0 0-3.484-3.472 3.48 3.48 0 0 0-3.484 3.472.7.7 0 0 1 0 .226H7.01a.7.7 0 0 1 0-.226A4.99 4.99 0 0 1 12.005 2 4.99 4.99 0 0 1 17 6.774z"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="m20.913 16.315-.769-6.195C19.676 7.91 18.35 7 17.087 7H6.932c-1.282 0-2.652.846-3.05 3.12l-.777 6.195C2.469 20.863 4.81 22 7.869 22h8.29c3.049 0 5.32-1.646 4.754-5.685M9.097 12.149a.897.897 0 0 1-.884-.91c0-.502.396-.91.884-.91s.884.408.884.91-.396.91-.884.91m4.905-.91c0 .502.396.91.884.91a.897.897 0 0 0 .884-.91.897.897 0 0 0-.884-.91.897.897 0 0 0-.884.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBag;
