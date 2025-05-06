import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgShow = (props: SvgProps) => (
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
      d="M12 15.87c-2.156 0-3.902-1.737-3.902-3.87 0-2.143 1.746-3.879 3.902-3.879A3.89 3.89 0 0 1 15.893 12c0 2.133-1.747 3.87-3.893 3.87m9.942-4.16c-1.044-2.415-2.498-4.346-4.205-5.664C16.029 4.718 14.068 4 12 4h-.01C7.863 4 4.146 6.879 2.06 11.71a.73.73 0 0 0 0 .571C4.146 17.111 7.863 20 11.99 20H12c4.137 0 7.854-2.89 9.942-7.719a.73.73 0 0 0 0-.572"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M14.431 11.997a2.43 2.43 0 0 1-2.43 2.414c-1.346 0-2.438-1.086-2.438-2.414 0-.165.02-.32.049-.474h.048a1.997 1.997 0 0 0 2-1.921c.108-.019.225-.03.342-.03a2.43 2.43 0 0 1 2.429 2.425"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShow;
