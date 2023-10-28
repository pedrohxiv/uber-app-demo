import { TouchableOpacity, View } from "react-native";

import { useNavigation, type NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as Icons from "react-native-heroicons/solid";

import { Map } from "../components/map";
import { NavigateCard } from "../components/navigate-card";
import { RideOptionsCard } from "../components/ride-options-card";

import type { RootStackParamList } from "../App";

export type MapStackParamList = {
  Navigate: undefined;
  RideOptions: undefined;
};

const Stack = createNativeStackNavigator<MapStackParamList>();

export function MapScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <TouchableOpacity
        className="absolute top-16 left-8 z-10 bg-gray-100 p-3 rounded-full shadow-lg"
        onPress={() => navigation.navigate("Home")}
      >
        <Icons.Bars3Icon color="black" />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Navigate" component={NavigateCard} />
          <Stack.Screen name="RideOptions" component={RideOptionsCard} />
        </Stack.Navigator>
      </View>
    </View>
  );
}
