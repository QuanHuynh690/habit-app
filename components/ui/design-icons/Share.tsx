import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgShare = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M14.408 9V7.41c0-.89 1.08-1.34 1.71-.71l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.63.63-1.71.19-1.71-.7V14.9c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShare;
