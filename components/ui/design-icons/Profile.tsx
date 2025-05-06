import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgProfile = (props: SvgProps) => (
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
      d="M11.997 12.584a5.273 5.273 0 0 0 5.292-5.292A5.273 5.273 0 0 0 11.997 2a5.274 5.274 0 0 0-5.292 5.292 5.274 5.274 0 0 0 5.292 5.292"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M11.997 15.175c-4.313 0-7.997.68-7.997 3.4S7.66 22 11.997 22c4.313 0 7.997-.68 7.997-3.4 0-2.721-3.66-3.425-7.997-3.425"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgProfile;
