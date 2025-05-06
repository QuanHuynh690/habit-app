import * as React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";
const SvgApple = (props: SvgProps) => (
  <Svg width={props.width || 25} fill="none" {...props}>
    <Path
      fill="#000"
      d="M15.214 5.19A4.38 4.38 0 0 0 16.274 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42m2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53c-1.76 3.06-.45 7.61 1.31 10.08.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82 2 .82 3.3.79 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4.04"
    />
  </Svg>
);
export default SvgApple;
