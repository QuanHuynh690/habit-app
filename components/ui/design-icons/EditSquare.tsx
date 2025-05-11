import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgEditSquare = (props: IconProps) => (
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
      d="M16.664 21.99h-9.33A5.34 5.34 0 0 1 3.4 20.6a5.35 5.35 0 0 1-1.389-3.936v-9.33a5.35 5.35 0 0 1 1.388-3.936A5.35 5.35 0 0 1 7.335 2.01h9.33a5.34 5.34 0 0 1 3.932 1.388 5.37 5.37 0 0 1 1.393 3.937v9.33a5.35 5.35 0 0 1-1.389 3.936 5.35 5.35 0 0 1-3.937 1.389"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="m17.055 10.398-6.553 6.585a1.8 1.8 0 0 1-1.256.517H6.958a.46.46 0 0 1-.331-.137.46.46 0 0 1-.127-.331l.058-2.312c.01-.459.195-.888.516-1.21l4.645-4.654a.21.21 0 0 1 .292 0l1.629 1.623a.62.62 0 0 0 .428.175c.36 0 .643-.293.643-.644a.66.66 0 0 0-.175-.449c-.03-.039-1.58-1.583-1.58-1.583a.26.26 0 0 1 0-.36l.652-.664a1.537 1.537 0 0 1 2.18 0l1.267 1.268a1.55 1.55 0 0 1 0 2.176"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEditSquare;
