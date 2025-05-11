import { ReactElement } from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import IconButton from "../icon-button/IconButton";
import { Setting } from "../ui/design-icons";
interface HeaderProps {
  title: string;
  icon?: ReactElement;
}
const Header = (props: HeaderProps) => {
  const { title, icon } = props;
  return (
      <View className="flex flex-row items-center justify-between">
        <ThemedText className="text-2xl font-medium">{title}</ThemedText>
        {icon && (
          <IconButton
            icon={icon}
            onPress={() => alert("Setting button pressed")}
            width={48}
            height={48}
          />
        )}
    </View>
  );
};

export default Header;
