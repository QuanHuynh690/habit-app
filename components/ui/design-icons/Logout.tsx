import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgLogout = (props: IconProps) => (
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
      d="M2 6.447C2 3.996 4.03 2 6.525 2h4.96C13.976 2 16 3.99 16 6.437v11.116C16 20.005 13.97 22 11.474 22H6.515C4.025 22 2 20.01 2 17.563V6.447"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="m21.779 11.455-2.846-2.91a.736.736 0 0 0-1.06.003.785.785 0 0 0 .002 1.089l1.559 1.593H9.549a.76.76 0 0 0-.75.77c0 .426.336.77.75.77h9.885l-1.56 1.593a.785.785 0 0 0-.001 1.089.74.74 0 0 0 .531.227.74.74 0 0 0 .53-.225l2.845-2.908a.783.783 0 0 0 0-1.091"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLogout;
