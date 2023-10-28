import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { useNavigation, type NavigationProp } from "@react-navigation/native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import * as Icons from "react-native-heroicons/solid";

import { GOOGLE_MAPS_API_KEY } from "@env";

import { useDispatch } from "../hooks/use-redux";
import { setDestination } from "../slices/nav-slice";
import { NavFavourites } from "./nav-favourites";

import type { MapStackParamList } from "../screens/map-screen";

export function NavigateCard() {
  const navigation = useNavigation<NavigationProp<MapStackParamList>>();
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Pedro</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "pt-BR",
            }}
            styles={{
              container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
              textInput: {
                backgroundColor: "#DDDDDF",
                borderRadius: 0,
                fontSize: 18,
              },
              textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={300}
            minLength={2}
            fetchDetails={true}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location!,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptions");
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View className="flex-row bg-white justify-evenly py-4 mt-auto border-t border-gray-100">
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptions")}
          className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
        >
          <View>
            <Icons.MapPinIcon color="white" size={16} />
          </View>
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-between w-24 px-4 py-3 rounded-full">
          <View>
            <Icons.TruckIcon color="black" size={16} />
          </View>
          <Text className="text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
