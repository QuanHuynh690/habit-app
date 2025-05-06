import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgUpload = (props: SvgProps) => (
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
      d="M6.447 22C3.996 22 2 19.97 2 17.476v-4.962C2 10.025 3.99 8 6.437 8h11.116C20.005 8 22 10.03 22 12.526v4.959C22 19.975 20.01 22 17.563 22H6.447"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="m11.455 2.221-2.91 2.846c-.3.294-.3.767.003 1.06a.785.785 0 0 0 1.089-.001l1.593-1.56v9.885c0 .415.345.75.77.75a.76.76 0 0 0 .77-.75V4.567l1.593 1.56c.3.293.787.294 1.089.001a.74.74 0 0 0 .227-.531.74.74 0 0 0-.225-.53l-2.908-2.845a.783.783 0 0 0-1.091 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUpload;
