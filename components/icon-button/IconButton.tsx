import { ReactElement } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
interface IconButtonProps {
  icon: ReactElement;
  width?: number;
  height?: number;
  bgColor?: string;
  onPress?: () => void;
}
const IconButton = (props: IconButtonProps) => {
  const { icon, onPress, width, height, bgColor } = props;
  const styles = StyleSheet.create({
    iconButton: {
      width: width,
      height: height,
      backgroundColor: bgColor,
    },
  });
  return (
    <TouchableOpacity
      style={styles.iconButton}
      onPress={onPress}
      className="border border-black-10 rounded-xl p-1.5 flex items-center justify-center"
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
