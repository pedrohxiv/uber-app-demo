import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation, type NavigationProp } from "@react-navigation/native";

import * as Icons from "react-native-heroicons/solid";

import { useSelector } from "../hooks/use-redux";

import type { RootStackParamList } from "../App";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    screen: "Map",
  },
  {
    id: "2",
    title: "Order food",
    image:
      "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
    screen: "Eats",
  },
];

export function NavOptions() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { origin } = useSelector((state) => state.nav);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className={`${
            !origin && "opacity-20"
          } p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate("Map")}
          disabled={!origin}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
          </View>
          <View className="p-2 bg-black rounded-full w-10 h-10 mt-4">
            <Icons.ArrowRightIcon color="white" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
