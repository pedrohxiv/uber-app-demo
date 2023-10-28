import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { useNavigation, type NavigationProp } from "@react-navigation/native";

import * as Icons from "react-native-heroicons/solid";

import { useSelector } from "../hooks/use-redux";

import type { MapStackParamList } from "../screens/map-screen";

const data = [
  {
    id: "Uber-X-1",
    title: "Uber X",
    multiplier: 1,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
  },
  {
    id: "Uber-XL-1",
    title: "Uber XL",
    multiplier: 1.2,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
  },
  {
    id: "Uber-LUX-1",
    title: "Uber LUX",
    multiplier: 1.75,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
  },
];

export function RideOptionsCard() {
  const [selected, setSelected] = useState<typeof data[number] | null>(null);
  const { travelTimeInformation } = useSelector((state) => state.nav);
  const navigation = useNavigation<NavigationProp<MapStackParamList>>();

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="border-b border-gray-200">
        <TouchableOpacity
          className="absolute top-3 left-5 z-10 p-3 rounded-full"
          onPress={() => navigation.navigate("Navigate")}
        >
          <Icons.ChevronLeftIcon color="black" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride -{" "}
          {(
            Number(travelTimeInformation?.distance?.text.slice(0, -3)) * 1.609
          ).toFixed(2)}{" "}
          Km
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInformation?.duration?.value! *
                  1.5 *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
