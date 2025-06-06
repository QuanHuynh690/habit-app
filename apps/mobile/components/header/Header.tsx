import { ReactElement } from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import IconButton from "../icon-button/IconButton";
import { IconSymbol } from "../ui/IconSymbol";
import { useRouter } from "expo-router";
interface HeaderProps {
  title: string;
  rightIcon?: ReactElement;
  headerButtonAction?: () => void;
  isBackable?: boolean;
  className?: string;
}
const Header = (props: HeaderProps) => {
  const { title, rightIcon, isBackable, className, headerButtonAction } = props;
  const router = useRouter();
  return (
    <View className="flex flex-row items-end justify-between bg-white h-36 p-6">
      <View className="flex flex-row items-center gap-2 ">
        {isBackable && (
          <IconButton
            icon={<IconSymbol name="ArrowLeft2" />}
            onPress={() => router.back()}
            width={48}
            height={48}
          />
        )}
        <ThemedText type="title">
          {title}
        </ThemedText>
      </View>
      {rightIcon && (
        <IconButton
          icon={rightIcon}
          onPress={headerButtonAction}
          width={48}
          height={48}
        />
      )}
    </View>
  );
};

export default Header;
