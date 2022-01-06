import { useState } from "react";
import Home from "./views/home";
import About from "./views/about";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Image } from "react-native";
import Header from "./components/header";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Header title="Home" navigation route {...props} />
            ),
            headerRight: (props) => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#333"
              />
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#FFFFFF"
        barStyle={{ backgroundColor: "black" }}
      >
        <Tab.Screen
          name="Name"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
