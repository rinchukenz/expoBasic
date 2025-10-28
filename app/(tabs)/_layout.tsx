import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor : 'red',
    }}
    >
      <Tabs.Screen
        name="index" options={{
          headerTitle : "HighRR",
          headerTintColor : 'white',
          headerTitleAlign: "center",
          headerStyle : { backgroundColor : "grey" },
          tabBarIcon: ({focused, size}) => (
          <Ionicons 
            name={focused ? "home-sharp" : "home-outline"}
            size={30} />),  
        }}/>
      <Tabs.Screen
        name="about" options={{
          headerTitle : "About",
          headerStyle : { backgroundColor : "grey" },
          tabBarIcon: ({focused, size}) => (<Ionicons
             name={focused ? "information-circle" : "information-circle-outline"}   
             size={30} />),  

        }}/>   
          </Tabs>
  );
}
