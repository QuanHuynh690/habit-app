import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgEdit1 = (props: SvgProps) => (
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
      d="m15.951 10.416.81-1.01c.37-.476.501-1.027.378-1.588-.107-.51-.42-.995-.889-1.363l-1.144-.911c-.996-.795-2.23-.711-2.938.2l-.78.97a.24.24 0 0 0 .033.336l4.201 3.404a.23.23 0 0 0 .33-.038m-2.164 6.992h4.43a.79.79 0 0 1 .783.796.79.79 0 0 1-.784.796h-4.429a.79.79 0 0 1-.783-.796.79.79 0 0 1 .783-.796"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="m10.702 8.052 4.209 3.414a.243.243 0 0 1 .04.335l-4.99 6.526a1.64 1.64 0 0 1-1.272.64L5.965 19a.31.31 0 0 1-.306-.244l-.619-2.701c-.107-.497 0-1.01.314-1.406l5.015-6.556a.233.233 0 0 1 .333-.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEdit1;
