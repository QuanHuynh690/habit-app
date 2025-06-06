import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgWallet = (props: IconProps) => (
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
      d="M16.037 12.297c.21.95 1.044 1.62 1.996 1.603h3.25a.726.726 0 0 0 .717-.734v-2.532a.73.73 0 0 0-.718-.734h-3.326c-1.083.004-1.958.902-1.956 2.01q0 .196.037.387"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M6.74 8.367h5.65a.756.756 0 0 0 .762-.75.757.757 0 0 0-.769-.742H6.74a.756.756 0 0 0-.762.744.756.756 0 0 0 .762.748m15.256.008h-4.234c-1.97.004-3.567 1.56-3.57 3.482-.004 1.925 1.595 3.489 3.57 3.491H22v.306C22 19.014 19.964 21 16.517 21H7.484C4.036 21 2 19.014 2 15.654V8.338C2 4.978 4.036 3 7.484 3h9.03c3.446 0 5.482 1.979 5.482 5.338zM18 12.9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWallet;
