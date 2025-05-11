import { ReactElement } from "react";
import { ProfileTab } from "@/shared/enums/profile";
import { Image, Text, View } from "react-native";
import IconButton from "../icon-button/IconButton";

interface ProfileCardProps {
  title: string;
  subTitle: number | string;
  type: ProfileTab;
  image?: string;
  actionButton?: () => void;
  actionIcon?: ReactElement
}
const ProfileCard = (props: ProfileCardProps) => {
  const { title, type, subTitle, image, actionIcon, actionButton } = props;
  return (
    <View className="h-16 border items-center flex flex-row justify-between mt-2 p-4 rounded-2xl border-black-10 bg-white">
      <View className="flex flex-row items-center">
        {image && (
          <Image
            source={{ uri: image }}
            className="w-8 h-8 rounded-full mr-3"
          />
        )}
        <View>
          <Text className="font-sans text-sm text-black-100 font-medium">
            {title}
          </Text>
          <Text className="text-black-40 text-xs">{subTitle}</Text>
        </View>
      </View>
      {actionIcon && (
        <View>
          <IconButton icon={actionIcon} onPress={actionButton} />
        </View>
      )}
    </View>
  );
};
export default ProfileCard;
