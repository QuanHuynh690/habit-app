import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgFolder = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M16.884 5.115h-2.943a2.43 2.43 0 0 1-1.894-.887l-.969-1.34A2.37 2.37 0 0 0 9.193 2h-2.08C3.378 2 2 4.192 2 7.92v4.028c-.005.443 19.996.443 19.997 0v-1.17c.018-3.728-1.325-5.662-5.113-5.662"
      clipRule="evenodd"
      opacity={0.2}
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M20.832 6.543c.32.375.567.805.73 1.27.318.954.465 1.957.435 2.963v5.253a9 9 0 0 1-.098 1.322 6 6 0 0 1-.8 2.183 4.4 4.4 0 0 1-.676.888 6 6 0 0 1-4.366 1.57H7.931a6.03 6.03 0 0 1-4.375-1.57 4.4 4.4 0 0 1-.667-.888 5.8 5.8 0 0 1-.782-2.183A8 8 0 0 1 2 16.03v-5.253q0-.659.071-1.313.016-.115.04-.226c.025-.125.049-.247.049-.369.09-.526.255-1.037.49-1.517.693-1.482 2.115-2.236 4.445-2.236h9.78c1.305-.101 2.6.292 3.628 1.1q.178.15.33.328M6.97 15.541h10.083a.83.83 0 0 0 .863-.799.74.74 0 0 0-.178-.532.78.78 0 0 0-.622-.32H6.97a.826.826 0 1 0 0 1.651"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFolder;
