import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
const SvgShieldFail = (props: SvgProps) => (
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
      d="M12.086 22a.8.8 0 0 1-.358-.086L8.126 20.05c-1.023-.53-1.822-1.124-2.445-1.816a8.24 8.24 0 0 1-2.14-5.474L3.5 6.124a1.81 1.81 0 0 1 1.227-1.712l6.613-2.305c.394-.14.832-.142 1.23-.007l6.638 2.227c.743.248 1.245.93 1.25 1.695l.042 6.64a8.24 8.24 0 0 1-2.065 5.496c-.618.702-1.41 1.305-2.421 1.845l-3.57 1.906a.8.8 0 0 1-.358.091"
      clipRule="evenodd"
    />
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="m13.068 11.725 1.358-1.323a.72.72 0 0 0 0-1.04.77.77 0 0 0-1.068 0L12 10.685l-1.357-1.321a.77.77 0 0 0-1.069 0 .72.72 0 0 0 0 1.04l1.358 1.322-1.358 1.323a.72.72 0 0 0 0 1.04.76.76 0 0 0 .535.215.76.76 0 0 0 .534-.216L12 12.765l1.358 1.322a.76.76 0 0 0 .533.216.76.76 0 0 0 .535-.216.72.72 0 0 0 0-1.04z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShieldFail;
