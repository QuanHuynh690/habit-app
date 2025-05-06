import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgPlay1 = (props: SvgProps) => (
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
      d="M22 12.005C22 17.514 17.512 22 12 22S2 17.514 2 12.005C2 6.486 6.488 2 12 2s10 4.486 10 10.005"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M16 12.005c0 .253-.08.506-.239.71-.03.04-.169.204-.278.31l-.06.059c-.835.885-2.913 2.217-3.967 2.644 0 .01-.626.263-.925.272h-.04c-.457 0-.884-.252-1.103-.66-.12-.225-.229-.876-.239-.885-.09-.584-.149-1.478-.149-2.46 0-1.03.06-1.963.169-2.537 0-.01.11-.535.179-.71.11-.251.308-.466.557-.602Q10.204 8 10.53 8c.229.01.656.156.825.224 1.114.427 3.242 1.827 4.057 2.682.14.136.289.303.329.34.168.214.258.477.258.759"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlay1;
