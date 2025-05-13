import { ReactElement } from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import IconButton from "../icon-button/IconButton";
import { Setting } from "../ui/design-icons";
interface HeaderProps {
  title: string;
  icon?: ReactElement;
  headerButtonAction?: () => void;
}
const Header = (props: HeaderProps) => {
  const { title, icon, headerButtonAction } = props;
  return (
    <View className="flex flex-row items-center justify-between">
      <ThemedText type="title" className="font-medium">{title}</ThemedText>
      {icon && (
        <IconButton
          icon={icon}
          onPress={headerButtonAction}
          width={48}
          height={48}
        />
      )}
    </View>
  );
};

export default Header;
