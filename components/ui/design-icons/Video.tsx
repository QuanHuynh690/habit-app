import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgVideo = (props: SvgProps) => (
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
      d="M21.33 7.443a1.38 1.38 0 0 0-1.372-.064l-1.482.748a1.62 1.62 0 0 0-.888 1.456v5.833c0 .622.34 1.179.888 1.457l1.48.747c.202.104.417.153.632.153.258 0 .514-.073.743-.216.419-.263.669-.718.669-1.218V8.662c0-.5-.25-.955-.67-1.22"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M11.905 20H6.113C3.691 20 2 18.33 2 15.94V9.06C2 6.67 3.691 5 6.113 5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgVideo;
