import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgGraph = (props: SvgProps) => (
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
      d="M12.87 2c4.56.117 8.392 3.396 9.13 7.812l-.007.033-.02.047.003.13a.8.8 0 0 1-.192.473.83.83 0 0 1-.462.27l-.11.016-7.68.498a.92.92 0 0 1-.7-.227.88.88 0 0 1-.289-.537l-.515-7.67a.12.12 0 0 1 0-.08.79.79 0 0 1 .258-.555.82.82 0 0 1 .584-.21"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M10.153 5.556q.076.156.1.328l.278 4.14.138 2.081q.003.323.1.631c.167.397.568.649 1.005.631l6.657-.436c.289-.004.567.104.774.3.173.164.284.379.32.61l.011.14c-.275 3.814-3.077 6.996-6.884 7.817-3.806.821-7.71-.914-9.591-4.263a8.2 8.2 0 0 1-.997-3.146 6 6 0 0 1-.063-.986c-.006-4.09 2.906-7.626 6.983-8.478.491-.077.972.183 1.169.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgGraph;
