import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgCall = (props: IconProps) => (
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
      d="M18.167 14.38c-.672-.145-1.203.167-1.674.439-.482.28-1.398 1.024-1.923.834-2.689-1.107-5.218-3.461-6.313-6.16-.193-.537.547-1.46.826-1.947.27-.472.576-1.008.436-1.685-.126-.608-1.754-2.68-2.33-3.246q-.569-.562-1.168-.613c-1.5-.065-3.177 1.938-3.472 2.417-.736 1.022-.732 2.382.013 4.03 1.795 4.43 8.586 11.112 13.03 12.975q1.231.576 2.245.576c.659 0 1.246-.184 1.75-.549.381-.22 2.467-1.98 2.412-3.52-.033-.394-.238-.787-.608-1.167-.562-.581-2.62-2.258-3.224-2.385"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCall;
