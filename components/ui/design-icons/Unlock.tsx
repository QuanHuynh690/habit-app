import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgUnlock = (props: SvgProps) => (
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
      d="M8.24 8.71V7.366C8.25 5.37 9.925 3.74 11.998 3.74c1.585 0 3.008.984 3.526 2.456a.906.906 0 0 0 1.138.537.85.85 0 0 0 .508-.438.84.84 0 0 0 .04-.666C16.44 3.462 14.347 2 11.98 2 8.95 2 6.48 4.416 6.46 7.387v1.524z"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M12.89 16.454a.88.88 0 0 1-.895.874.877.877 0 0 1-.884-.874v-2.207c0-.477.396-.864.884-.864.498 0 .894.387.894.864zM16.23 8.71H7.77c-2.358 0-4.269 1.87-4.269 4.176v4.938C3.5 20.13 5.411 22 7.769 22h8.462c2.358 0 4.269-1.87 4.269-4.175v-4.938c0-2.306-1.911-4.176-4.269-4.176"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUnlock;
