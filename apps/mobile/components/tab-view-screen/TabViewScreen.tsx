import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import {
  TabView,
  SceneMap,
  type Route,
  type SceneRendererProps,
} from "react-native-tab-view";
import ProfileCard from "../profile-card/ProfileCard";
import { ProfileTab } from "@shared/enums/profile";
import TabBar from "./tab-bar/TabBar";

interface TabViewScreenProps {
  routes: Route[];
  renderScene: (
    props: SceneRendererProps & { route: Route }
  ) => JSX.Element | null;
}
export default function TabViewScreen(props: TabViewScreenProps) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <View className="h-screen">
      <TabView
        navigationState={{ index, routes: props.routes }}
        renderScene={props.renderScene}
        renderTabBar={(props) => <TabBar {...props} />}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}
