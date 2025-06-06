import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgCallEnd = (props: IconProps) => (
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
      d="M7.166 15.143c.461-.299.586-.776.698-1.196.113-.431.211-1.37.616-1.56 2.147-.894 4.91-.994 7.056-.086.412.195.515 1.135.634 1.568.114.42.244.896.706 1.2.415.273 2.508.524 3.154.519q.64-.004 1.008-.314c.886-.813.701-2.894.596-3.332-.161-.995-.933-1.761-2.287-2.273-3.52-1.49-11.142-1.429-14.71.032q-1.022.371-1.596.944-.56.561-.68 1.3c-.09.34-.275 2.515.628 3.357.241.203.58.31 1.004.316.647.01 2.76-.206 3.173-.475"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCallEnd;
