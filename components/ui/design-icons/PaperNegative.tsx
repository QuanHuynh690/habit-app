import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgPaperNegative = (props: IconProps) => (
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
      d="M18.132 9.017q.38.004.677.004c.221 0 .546-.003.868-.005l.37-.003a.454.454 0 0 1 .453.458v8.031c0 2.485-1.994 4.498-4.454 4.498H8.17c-2.579 0-4.67-2.111-4.67-4.716V6.509C3.5 4.026 5.496 2 7.963 2h5.29c.25 0 .453.206.453.459v3.216c0 1.833 1.493 3.336 3.309 3.336q.627 0 1.117.006M15.262 2.9c0-.43.524-.645.822-.334l4.026 4.187a.477.477 0 0 1-.342.808c-.823.002-1.791 0-2.488-.008a2.026 2.026 0 0 1-2.017-2.016z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M14.367 14.57H9.424a.745.745 0 1 1 0-1.49h4.943a.746.746 0 0 1 0 1.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPaperNegative;
