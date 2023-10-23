import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./home";
import SailorMoon from "./SailorMoon";
import SakuraCardCaptors from "./SakuraCardCaptors";

const Tab = createBottomTabNavigator();

export default function RotasTab(){
  return(

    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

      
      <Tab.Screen name="Sakura Card Captors" component={SakuraCardCaptors} options = {{
        tabBarIcon:({color, size})=> <MaterialCommunityIcons name="flower-outline" color={color} size={size} /> 
      }}/>
      <Tab.Screen name="Home" component={Home} options = {{
        tabBarIcon:({color, size})=> <MaterialCommunityIcons name="home-heart" color={color} size={size} /> 
      }}/>
      <Tab.Screen name="Sailor Moon" component={SailorMoon} options = {{
        tabBarIcon:({color, size})=> <MaterialCommunityIcons name="moon-waning-crescent" color={color} size={size} /> 
      }}/>


    </Tab.Navigator>
  );
}