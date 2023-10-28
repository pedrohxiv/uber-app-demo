import { View, Text, FlatList, TouchableOpacity } from "react-native";

import * as Icons from "react-native-heroicons/solid";

const data = [
  {
    id: "1",
    location: "Home",
    destination: "Praça Ferreira Pires - Formiga, MG, Brasil",
  },
  {
    id: "2",
    location: "Work",
    destination:
      "Hiper ABC Formiga - Avenida Paulo de Brito - Formiga, MG, Brasil",
  },
];

export function NavFavourites() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-[0.5px]" />}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          {item.location === "Home" ? (
            <View className="mr-4 rounded-full bg-gray-300 p-3">
              <Icons.HomeIcon color="white" size={18} />
            </View>
          ) : (
            <View className="mr-4 rounded-full bg-gray-300 p-3">
              <Icons.BriefcaseIcon color="white" size={18} />
            </View>
          )}
          <View className="w-5/6">
            <Text className="font-semibold text-lg">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
