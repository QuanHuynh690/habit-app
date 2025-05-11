import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgPaperUpload = (props: IconProps) => (
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
      d="M18.132 9.017q.38.004.677.004a127 127 0 0 0 1.238-.008.454.454 0 0 1 .453.458v8.031c0 2.485-1.994 4.498-4.455 4.498H8.17c-2.58 0-4.67-2.111-4.67-4.716V6.509C3.5 4.026 5.495 2 7.964 2h5.289c.25 0 .453.206.453.459v3.216c0 1.833 1.493 3.336 3.309 3.336q.627 0 1.116.006M15.263 2.9c0-.43.522-.645.821-.334l2.64 2.746 1.386 1.441a.477.477 0 0 1-.343.808c-.822.002-1.79 0-2.488-.008a2.026 2.026 0 0 1-2.016-2.016z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M15.105 12.884a.745.745 0 0 1-1.054-.002l-1.589-1.597v4.827a.746.746 0 0 1-1.489 0v-4.827l-1.59 1.597a.744.744 0 1 1-1.056-1.051l2.862-2.875.001-.001a.74.74 0 0 1 .527-.218.74.74 0 0 1 .526.217q.002 0 .002.002l2.862 2.875c.29.292.29.764-.002 1.053"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPaperUpload;
