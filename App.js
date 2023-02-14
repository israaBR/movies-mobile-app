import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MoviesList } from "./components/moviesList";
import { MovieDetails } from "./components/movieDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MoviesList} />
        <Stack.Screen name="Movie Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
