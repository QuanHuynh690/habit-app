import { type TabBarProps, type Route } from "react-native-tab-view";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  useWindowDimensions,
} from "react-native";

const TabBar = (props: TabBarProps<Route>) => {
  const { width } = useWindowDimensions();
  const tabWidth = (width - 46) / props.navigationState.routes.length;

  const translateX = props.position.interpolate({
    inputRange: props.navigationState.routes.map((_, i) => i),
    outputRange: props.navigationState.routes.map((_, i) => i * tabWidth),
  });

  return (
    <View className="px-6 pb-4 bg-white">
      <View className="bg-black-10 rounded-2xl p-0.5">
        <View className="relative flex-row items-center bg-black-10 rounded-2xl overflow-hidden">
          {/* Animated highlight pill */}
          <Animated.View
            style={[
              styles.pill,
              {
                width: tabWidth,
                transform: [{ translateX }],
              },
            ]}
          />

          {/* Tab labels */}
          {props.navigationState.routes.map((route, i) => {
            const color = props.position.interpolate({
              inputRange: props.navigationState.routes.map((_, j) => j),
              outputRange: props.navigationState.routes.map((_, j) =>
                i === j ? "#3843ff" : "#686873"
              ),
            });

            return (
              <TouchableOpacity
                key={route.key}
                style={[styles.tabItem, { width: tabWidth }]}
                onPress={() => props.jumpTo(route.key)}
              >
                <Animated.Text style={{ color, fontSize: 14 }}>
                  {route.title}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  pill: {
    position: "absolute",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
});
