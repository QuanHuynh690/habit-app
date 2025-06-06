import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgPaperDownload = (props: IconProps) => (
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
      d="M18.132 9.017q.38.004.677.004c.221 0 .546-.003.868-.005l.37-.003a.454.454 0 0 1 .453.458v8.031c0 2.485-1.994 4.498-4.454 4.498H8.17c-2.579 0-4.67-2.111-4.67-4.716V6.509C3.5 4.026 5.496 2 7.964 2h5.288c.251 0 .454.206.454.459v3.216c0 1.833 1.493 3.336 3.309 3.336q.627 0 1.117.006M15.263 2.9c0-.43.522-.645.821-.334l2.639 2.744 1.387 1.443a.477.477 0 0 1-.343.808c-.822.002-1.79 0-2.488-.008a2.026 2.026 0 0 1-2.016-2.016z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M15.105 12.709a.745.745 0 0 0-1.054.002l-1.589 1.597V9.48a.746.746 0 0 0-1.49 0v4.827l-1.59-1.597a.744.744 0 1 0-1.056 1.05l2.863 2.877h.001a.745.745 0 0 0 1.053 0h.002l2.862-2.876a.744.744 0 0 0-.002-1.053"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPaperDownload;
