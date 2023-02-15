import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./components/home";
import { MoviesList } from "./components/moviesList";
import { MovieDetails } from "./components/movieDetails";
import { Browser } from "./components/browser";
import { CalendarComponent } from "./components/calendar";
import { CameraComponent } from "./components/camera";
import { ContactsComponent } from "./components/contacts";
import { Gallery } from "./components/gallery";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movies List" component={MoviesList} />
        <Stack.Screen name="Movie Details" component={MovieDetails} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Camera" component={CameraComponent} />
        <Stack.Screen name="Browser" component={Browser} />
        <Stack.Screen name="Calendar" component={CalendarComponent} />
        <Stack.Screen name="Contacts" component={ContactsComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
