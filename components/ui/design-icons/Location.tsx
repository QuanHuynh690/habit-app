import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
const SvgLocation = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Ellipse cx={12} cy={21} fill="#CDCDD0" rx={5} ry={1} />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M15.566 2.995a6.89 6.89 0 0 0-7.034-.058C6.347 4.207 4.999 6.572 5 9.134a9.3 9.3 0 0 0 1.812 5.2c1.331 1.8 2.97 3.34 4.839 4.547a.8.8 0 0 0 .39.119q.218-.034.408-.144a18.7 18.7 0 0 0 3.358-2.82C17.554 14.19 18.95 11.802 19 9.261c.012-2.557-1.29-4.934-3.434-6.266m-3.574 8.697c-.963 0-1.83-.591-2.198-1.497a2.46 2.46 0 0 1 .52-2.64 2.35 2.35 0 0 1 2.593-.52 2.42 2.42 0 0 1 1.462 2.243 2.43 2.43 0 0 1-.694 1.713 2.34 2.34 0 0 1-1.683.7"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLocation;
