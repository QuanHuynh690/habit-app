import * as React from "react";
import Svg, { Path, type SvgProps  } from "react-native-svg";
import { IconProps } from "./2User";
const SvgLock = (props: IconProps) => (
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
      d="M17.523 7.396v1.47c-.356-.099-.732-.148-1.118-.148h-.66V7.396c0-2.017-1.677-3.657-3.74-3.657s-3.74 1.63-3.75 3.637v1.342h-.65c-.396 0-.772.05-1.128.159V7.396C6.487 4.415 8.957 2 11.985 2c3.069 0 5.538 2.415 5.538 5.396"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#040415"}
      fillRule="evenodd"
      d="M12.89 16.455a.88.88 0 0 1-.895.874.877.877 0 0 1-.884-.874v-2.206c0-.477.396-.865.884-.865.498 0 .894.388.894.865zm3.341-7.741H7.77c-2.358 0-4.269 1.869-4.269 4.175v4.936C3.5 20.131 5.411 22 7.769 22h8.462c2.358 0 4.269-1.87 4.269-4.175V12.89c0-2.306-1.911-4.175-4.269-4.175"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLock;
