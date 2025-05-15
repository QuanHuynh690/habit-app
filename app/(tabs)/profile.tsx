import { Image, Text, View } from "react-native";
import {  useRouter } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ProfileTab } from "@/shared/enums/profile";
import { SceneMap } from "react-native-tab-view";
import TabViewScreen from "@/components/tab-view-screen/TabViewScreen";
import {
  Edit1,
  Filter,
  Medal,
  Plus,
  Setting,
} from "@/components/ui/design-icons";
import Header from "@/components/header/Header";
import { FlatColors } from "@/shared/constants/Colors";
import { mockFriends } from "@/shared/mocks/friends";
import { activityLog } from "@/shared/mocks/activityLogs";
import ItemList from "@/components/item-list/ItemList";
import type { SceneRendererProps ,Route} from "react-native-tab-view";

type SceneRoute = {
  route: { key: string };
} & SceneRendererProps;

const routes = [
  { key: ProfileTab.Activity, title: "Activity" },
  { key: ProfileTab.Friend, title: "Friends" },
  { key: ProfileTab.Achievement, title: "Achievements" },
];
const renderScene = (props: SceneRendererProps & { route: Route }) => {
  switch (props.route.key) {
    case ProfileTab.Activity:
      return (
        <ItemList
          type={ProfileTab.Activity}
          data={activityLog}
          firstButton={<Filter />}
          listFirstAction={() => alert("Filter activity list")}
          listHeaderText="Showing last month activity"
        />
      );
    case ProfileTab.Friend:
      return (
        <ItemList
          type={ProfileTab.Friend}
          data={mockFriends}
          firstButton={<Edit1 />}
          secondButton={<Plus />}
          listFirstAction={() => alert("Edit friend list")}
          listSecondAction={() => alert("Add friend")}
          listHeaderText={`${mockFriends.length} Friends`}
        />
      );
    case ProfileTab.Achievement:
      return <ItemList type={ProfileTab.Achievement} />;
    default:
      return null;
  }
};

// const renderScene = SceneMap({
//   activity: () => (
//     <ItemList
//       type={ProfileTab.Activity}
//       data={activityLog}
//       firstButton={<Filter />}
//       listFirstAction={() => alert("Filter activity list")}
//       listHeaderText="Showing last month activity"
//     />
//   ),
//   friend: () => (
//     <ItemList
//       type={ProfileTab.Friend}
//       data={mockFriends}
//       firstButton={<Edit1 />}
//       secondButton={<Plus />}
//       listFirstAction={() => alert("Edit friend list")}
//       listSecondAction={() => alert("Add friend")}
//       listHeaderText={`${mockFriends.length} Friends`}
//     />
//   ),
//   achievement: () => <ItemList type={ProfileTab.Achievement} />,
// });

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fff", dark: "#353636" }}
      headerImage={
        <View className="px-6">
          <Header
            icon={<Setting />}
            title="Your Profile"
            headerButtonAction={() => router.push("/setting")}
          />
          <View className="flex flex-row items-center mt-3">
            <Image
              source={{ uri: "https://reactjs.org/logo-og.png" }}
              className="w-14 h-14 rounded-full mr-2"
            />
            <View>
              <ThemedText className="font-sans text-lg text-black-100 font-medium">
                Quan Huynh
              </ThemedText>
              <View className="flex flex-row items-center bg-warning-10 rounded-lg w-fit px-1 py-0.5 mt-1">
                <Medal
                  width={16}
                  color={FlatColors["warning-40"]}
                  secondColor={FlatColors["warning-100"]}
                  fillOpacity={1}
                />
                <ThemedText className="text-warning-100 text-sm font-medium">1274 Points</ThemedText>
              </View>
            </View>
          </View>
        </View>
      }
    >
      <View className="flex flex-1">
        <TabViewScreen renderScene={renderScene} routes={routes} />
      </View>
    </ParallaxScrollView>
  );
}
