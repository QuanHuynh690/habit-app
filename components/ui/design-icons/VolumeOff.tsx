import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgVolumeOff = (props: IconProps) => (
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
      d="M15.858 7.556c.018.134.035.26.044.425L6.29 17.593h-.222c-1.408 0-2.435-.995-2.626-2.54-.211-1.546-.169-4.193 0-5.6.202-1.461 1.281-2.467 2.626-2.467h1.831l3.494-2.859c.423-.358 1.175-.697 1.757-.709 1.059 0 2.033.742 2.382 1.928.138.496.19.995.233 1.47l.085.679zm-.977 6.176c.144-.141.462-.24.606-.205.39.1.465.658.46 1.096-.018 1.272-.062 2.157-.13 2.704l-.047.451v.009c-.046.453-.093.923-.226 1.423-.354 1.184-1.3 1.952-2.373 1.952h-.107c-.593 0-1.237-.357-1.603-.667l-1.3-1.006c-.494-.368-.349-.955-.072-1.295.207-.253 2.695-2.536 4.003-3.736.444-.408.752-.69.789-.726"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M21.728 3.27a.926.926 0 0 0-1.308 0L3.27 20.42a.93.93 0 0 0 .004 1.313.96.96 0 0 0 .65.268c.24 0 .485-.1.656-.271L21.729 4.581a.927.927 0 0 0-.002-1.311"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgVolumeOff;
