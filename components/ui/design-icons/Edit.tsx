import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgEdit = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#CDCDD0"
      d="M4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
    />
    <Path
      fill="#040415"
      d="M13.709 2.877a3 3 0 0 1 4.242 0l1.172 1.172a3 3 0 0 1 0 4.242l-.416.416-5.414-5.414zM5.797 10.797a1.5 1.5 0 0 0-.296.562l-1.457 5.243a1.1 1.1 0 0 0 1.354 1.354l5.243-1.457a1.5 1.5 0 0 0 .562-.296z"
    />
    <Path
      fill="#CDCDD0"
      d="m18.707 8.707-5.414-5.414L5.886 10.7q-.046.047-.09.097l5.407 5.406q.05-.042.097-.089z"
    />
  </Svg>
);
export default SvgEdit;
