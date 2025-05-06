import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgDelete = (props: SvgProps) => (
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
      d="M19.643 9.488c0 .068-.533 6.81-.837 9.646-.19 1.741-1.313 2.797-2.997 2.827-1.293.029-2.56.039-3.805.039-1.323 0-2.616-.01-3.872-.039-1.627-.039-2.75-1.116-2.931-2.827-.313-2.847-.837-9.578-.846-9.646a.8.8 0 0 1 .19-.558.7.7 0 0 1 .524-.234h13.87c.2 0 .38.088.523.234.134.158.2.353.181.558"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M21 5.977a.72.72 0 0 0-.713-.733h-2.916a1.28 1.28 0 0 1-1.24-1.017l-.164-.73C15.738 2.618 14.95 2 14.065 2H9.936c-.895 0-1.675.617-1.913 1.546l-.152.682A1.28 1.28 0 0 1 6.63 5.244H3.714A.72.72 0 0 0 3 5.977v.38c0 .4.324.733.714.733h16.573A.73.73 0 0 0 21 6.357z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDelete;
