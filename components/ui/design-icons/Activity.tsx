import * as React from "react";
import Svg, { Circle, Path, type SvgProps } from "react-native-svg";
const SvgActivity = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Circle cx={19.5} cy={4.5} r={2.5} fill="#CDCDD0" />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M19.27 8.759a4.024 4.024 0 0 1-4.027-4.021q0-.373.07-.738H7.346C3.98 4 2 6.002 2 9.356v7.306C2 20.016 3.979 22 7.346 22h7.316C18.022 22 20 20.016 20 16.662V8.689q-.361.068-.73.07m-3.262 2.45-2.858 3.688a.74.74 0 0 1-1.055.131l-2.744-2.15-2.47 3.195a.74.74 0 0 1-1.364-.43.72.72 0 0 1 .159-.457l2.954-3.81a.74.74 0 0 1 1.047-.14l2.743 2.16 2.41-3.1a.73.73 0 0 1 1.037-.15.754.754 0 0 1 .14 1.045z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgActivity;
