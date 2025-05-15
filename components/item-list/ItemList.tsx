import { Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import ProfileCard from "@/components/profile-card/ProfileCard";
import { ProfileTab } from "@/shared/enums/profile";
import { TrashCan } from "@/components/ui/design-icons";
import IconButton from "@/components/icon-button/IconButton";
import { ActivityLog, Friend } from "@/shared/type/profile.type";
import { ReactElement, StrictMode } from "react";
import { listRenderers } from "@/shared/utilities/renderList";
interface ItemList {
  type: ProfileTab;
  data?: Friend[] | ActivityLog[];
  listHeaderText?: string;
  firstButton?: ReactElement;
  secondButton?: ReactElement;
  listFirstAction?: () => void;
  listSecondAction?: () => void;
}
const ItemList = (props: ItemList) => {
  const {
    firstButton,
    secondButton,
    listHeaderText,
    listFirstAction,
    listSecondAction,
  } = props;
  
  return (
    <StrictMode>
    <View className="px-6 py-3 relative">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row justify-between items-center w-full">
          <ThemedText> {listHeaderText}</ThemedText>
          <View className="flex flex-row gap-1">
            {secondButton && (
              <IconButton
                bgColor="#fff"
                icon={secondButton}
                onPress={listSecondAction}
              />
            )}
            {firstButton && (
              <IconButton
                bgColor="#fff"
                icon={firstButton}
                onPress={listFirstAction}
              />
            )}
          </View>
        </View>
      </View>
      <View>
        {props?.data?.map((item, index) => {
          const renderer = listRenderers[props.type];
          return renderer ? renderer(item, index) : null;
        })}
      </View>
    </View>
    </StrictMode>
  );
};

export default ItemList;
