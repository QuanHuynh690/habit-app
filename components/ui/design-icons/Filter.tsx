import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgFilter = (props: SvgProps) => (
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
      d="M20.493 4.898c.831 0 1.507.664 1.507 1.48 0 .818-.676 1.482-1.507 1.482h-6.575c-.832 0-1.508-.664-1.508-1.481s.676-1.48 1.508-1.48zM3.508 15.958h6.575c.832 0 1.508.664 1.508 1.481s-.675 1.482-1.508 1.482H3.508C2.676 18.92 2 18.256 2 17.439s.676-1.481 1.508-1.481"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M5.439 9.758c1.9 0 3.439-1.513 3.439-3.38C8.878 4.514 7.338 3 5.438 3 3.54 3 2 4.513 2 6.379s1.54 3.38 3.439 3.38m13.122 11.02c1.9 0 3.439-1.513 3.439-3.379s-1.539-3.38-3.439-3.38c-1.899 0-3.439 1.514-3.439 3.38s1.54 3.379 3.44 3.379"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFilter;
