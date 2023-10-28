import { SafeAreaView, Image, View } from "react-native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";

import { NavFavourites } from "../components/nav-favourites";
import { NavOptions } from "../components/nav-options";
import { useDispatch } from "../hooks/use-redux";
import { setDestination, setOrigin } from "../slices/nav-slice";

export function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "pt-BR",
          }}
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
          minLength={2}
          fetchDetails={true}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location!,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
}
