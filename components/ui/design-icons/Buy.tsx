import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgBuy = (props: SvgProps) => (
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
      d="M5.91 20.589c0-.84.68-1.52 1.52-1.52a1.515 1.515 0 1 1-1.52 1.52m11.25 0c0-.84.68-1.52 1.52-1.52a1.515 1.515 0 1 1-1.52 1.52"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M16.9 11.548h-2.77c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h2.77c.42 0 .75.33.75.75 0 .41-.33.75-.75.75m4.7-4.529c-.4-.46-.8-.67-1.41-.67H6.687a.61.61 0 0 1-.61-.561l-.19-2.24a.755.755 0 0 0-.62-.68l-2.385-.36c-.41-.06-.8.21-.87.62-.07.4.21.79.61.86l1.51.26.92 10.901a2.55 2.55 0 0 0 2.54 2.339H18.5c1.27 0 2.35-.929 2.53-2.19l.95-6.56c.09-.599.02-1.259-.38-1.719"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBuy;
