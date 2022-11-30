

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../Pages/Start";

const Start = createNativeStackNavigator();

export default function AllPages(){
  return(
    <NavigationContainer>
      <Stack.Navgator
        screenOptions={{
          headerShown:false,
        }} 
      >
        <Stack.Screen name="Start" component={Start} /> 
      </Stack.Navgator>
    </NavigationContainer>
  )
}
