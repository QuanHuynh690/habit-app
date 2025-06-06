import * as React from "react";
import { ColorValue } from "react-native";
import Svg, { Path, type SvgProps } from "react-native-svg";
import { IconSymbolName } from "../IconSymbol";
export interface IconProps extends SvgProps {
  name: IconSymbolName;
  secondColor?: ColorValue;
  fillOpacity?: number;
}
const Svg2User = (props: IconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill={props.secondColor || "#CDCDD0"}
      fillRule="evenodd"
      d="M14.212 7.762c0 2.644-2.163 4.763-4.863 4.763-2.698 0-4.863-2.119-4.863-4.763S6.651 3 9.35 3c2.7 0 4.863 2.119 4.863 4.762m.825 3.733a6.37 6.37 0 0 0 1.136-3.646c0-1.407-.45-2.717-1.233-3.793-.026-.033-.044-.084-.019-.124.02-.03.059-.047.095-.055a4 4 0 0 1 .818-.082c2.608 0 4.654 2.402 3.957 5.076-.47 1.803-2.174 3-4.073 2.95a4 4 0 0 1-.56-.051c-.13-.023-.197-.168-.121-.275"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M19.317 13.702c1.276.245 2.115.742 2.462 1.467a2.1 2.1 0 0 1 0 1.878c-.531 1.124-2.245 1.485-2.912 1.578a.207.207 0 0 1-.234-.232c.34-3.113-2.367-4.588-3.067-4.927-.03-.017-.036-.04-.034-.055.002-.01.015-.025.038-.028 1.515-.028 3.145.176 3.747.32M2 17.917c0-2.447 3.386-3.06 7.35-3.06 3.985 0 7.349.634 7.349 3.083 0 2.448-3.386 3.06-7.35 3.06C5.364 21 2 20.367 2 17.917"
      clipRule="evenodd"
    />
  </Svg>
);
export default Svg2User;
