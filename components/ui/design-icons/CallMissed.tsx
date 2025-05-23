import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgCallMissed = (props: IconProps) => (
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
      d="m19.337 5.918 2.404-2.413a.88.88 0 0 0 .26-.627.88.88 0 0 0-.26-.627.903.903 0 0 0-1.249 0L18.09 4.664l-2.405-2.413a.903.903 0 0 0-1.249 0 .887.887 0 0 0 0 1.254l2.404 2.413-2.404 2.412a.887.887 0 0 0 0 1.255.903.903 0 0 0 1.25 0l2.404-2.414 2.403 2.414a.88.88 0 0 0 1.249 0 .88.88 0 0 0 .26-.628.88.88 0 0 0-.26-.627z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M17.817 14.57c-.657-.139-1.177.165-1.638.43-.471.274-1.367.999-1.881.812-2.631-1.078-5.105-3.373-6.176-6.003-.189-.524.535-1.423.807-1.897.265-.46.564-.984.427-1.643-.123-.592-1.716-2.612-2.279-3.164q-.557-.548-1.143-.599c-1.468-.062-3.109 1.89-3.397 2.358-.72.996-.715 2.321.013 3.927 1.756 4.318 8.4 10.832 12.748 12.648q1.205.561 2.196.561c.645 0 1.219-.18 1.713-.535.372-.214 2.412-1.93 2.359-3.432-.032-.383-.232-.766-.595-1.137-.55-.566-2.564-2.2-3.154-2.325"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCallMissed;
