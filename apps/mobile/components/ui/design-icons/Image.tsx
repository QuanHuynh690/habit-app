import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgImage = (props: IconProps) => (
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
      d="M16.333 22H7.666C4.276 22 2 19.623 2 16.084V7.917C2 4.378 4.277 2 7.666 2h8.668C19.724 2 22 4.378 22 7.917v8.167C22 19.623 19.723 22 16.333 22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M11.245 8.675A2.49 2.49 0 0 1 8.76 11.16a2.487 2.487 0 0 1-2.485-2.485A2.49 2.49 0 0 1 8.76 6.189a2.49 2.49 0 0 1 2.485 2.486m8.156 5.413c.233.226.4.484.51.759.332.832.16 1.832-.197 2.656a3.64 3.64 0 0 1-2.247 2.046 4.6 4.6 0 0 1-1.4.207h-8.38c-.835 0-1.573-.194-2.177-.558-.38-.228-.446-.753-.165-1.095.47-.57.934-1.142 1.402-1.72.891-1.103 1.492-1.423 2.16-1.142.271.116.543.29.823.475.746.494 1.784 1.172 3.15.436.933-.51 1.475-1.385 1.947-2.145l.01-.015.094-.153c.16-.26.319-.514.498-.75.221-.29 1.045-1.2 2.11-.552.68.408 1.25.96 1.861 1.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgImage;
