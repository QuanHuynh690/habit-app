import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgCamera1 = (props: IconProps) => (
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
      d="m17.44 6.236-.1-.22c-.27-.569-.58-1.228-.77-1.608C16.11 3.51 15.32 3.01 14.35 3H9.64c-.97.01-1.75.51-2.21 1.408-.2.4-.54 1.12-.82 1.709l-.06.12c-.03.08-.11.12-.19.12A4.36 4.36 0 0 0 2 10.71v5.934A4.36 4.36 0 0 0 6.36 21h11.28c2.4 0 4.36-1.958 4.36-4.355V10.71a4.37 4.37 0 0 0-4.36-4.355c-.09 0-.16-.05-.2-.12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M16.71 10.072c0 .5.4.9.9.9s.91-.4.91-.9-.41-.909-.91-.909-.9.41-.9.91m-1.94 6.033a3.9 3.9 0 0 1-2.77 1.15 3.921 3.921 0 0 1-3.93-3.926 3.87 3.87 0 0 1 1.14-2.767A3.92 3.92 0 0 1 12 9.402c1.05 0 2.04.41 2.78 1.15.74.749 1.15 1.738 1.15 2.777a3.96 3.96 0 0 1-1.16 2.776M12 10.901c-.65 0-1.26.25-1.73.72-.46.459-.71 1.068-.7 1.697v.01c0 .65.25 1.26.71 1.719s1.07.709 1.72.709c1.34 0 2.42-1.089 2.43-2.427 0-.65-.25-1.26-.71-1.719s-1.07-.709-1.72-.709"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCamera1;
