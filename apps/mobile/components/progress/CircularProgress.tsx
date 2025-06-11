// import { ChallengeType } from "@shared/type/challenge.type";
// import { renderChallengeIcon } from "@shared/utilities/renderChallengeIcon";
import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { IconSymbol } from "../ui/IconSymbol";
import { FlatColors } from "@shared/src/constants/Colors";

type Props = {
  progress?: number;
  target: number;
  radius?: number;
  strokeWidth?: number;
  // type: ChallengeType;
};

const CircularProgress = ({
  progress = 0,
  target,
  radius = 15,
  strokeWidth = 2,
  // type,
}: Props) => {
  const size = radius * 2;
  const center = radius;
  const circumference = 2 * Math.PI * radius;
  const percent = Math.min(progress / target, 1);
  const strokeDashoffset = circumference * (1 - percent);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size+2} height={size+2}>
        <Circle
          stroke="#E5E7EB"
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={FlatColors["primary-blue-100"]}
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${center}, ${center}`}
        />
      </Svg>
      <View style={styles.centerText}>
        <IconSymbol
          // name={renderChallengeIcon(type)}
          name="2User"
          color="#FFCA00"
          width={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  
});

export default CircularProgress;
