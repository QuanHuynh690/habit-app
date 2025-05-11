import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgGoogle = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill="#3843FF"
      d="M21 12.2c0-.74-.061-1.28-.194-1.84h-8.622v3.34h5.06c-.101.83-.652 2.08-1.877 2.92l-.017.112 2.726 2.07.19.018C20 17.25 21 14.94 21 12.2"
    />
    <Path
      fill="#3BA935"
      d="M12.184 21c2.48 0 4.56-.8 6.081-2.18l-2.898-2.2c-.775.53-1.816.9-3.183.9a5.52 5.52 0 0 1-5.225-3.74l-.108.009-2.834 2.15-.037.101C5.49 18.98 8.592 21 12.184 21"
    />
    <Path
      fill="#FEA800"
      d="M6.96 13.78A5.4 5.4 0 0 1 6.652 12c0-.62.112-1.22.296-1.78l-.005-.12-2.87-2.184-.094.044A8.86 8.86 0 0 0 3 12c0 1.45.357 2.82.98 4.04z"
    />
    <Path
      fill="#E3524F"
      d="M12.184 6.48c1.724 0 2.887.73 3.55 1.34l2.592-2.48C16.736 3.89 14.664 3 12.185 3 8.592 3 5.49 5.02 3.98 7.96l2.969 2.26a5.54 5.54 0 0 1 5.235-3.74"
    />
  </Svg>
);
export default SvgGoogle;
