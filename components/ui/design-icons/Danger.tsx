import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgDanger = (props: SvgProps) => (
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
      d="M4.723 21.167h-.04a2.833 2.833 0 0 1-2.476-3.89L9.53 4.45a2.833 2.833 0 0 1 4.946.009l7.273 12.728c.162.381.23.691.248 1.007a2.81 2.81 0 0 1-.725 2.042 2.8 2.8 0 0 1-1.956.93l-14.52.001z"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M11.125 10.02c0-.481.393-.874.874-.874.482 0 .875.393.875.875v2.828a.876.876 0 0 1-1.75 0zm0 6.25a.873.873 0 1 1 1.75-.011.88.88 0 0 1-.876.886.877.877 0 0 1-.875-.875"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDanger;
