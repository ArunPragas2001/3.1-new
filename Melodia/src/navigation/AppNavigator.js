import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import CategoryScreen from "../screens/CategoryScreen";
import SearchScreen from "../screens/SearchScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import QuizScreen from "../screens/QuizScreen";
import ProfileScreen from "../screens/ProfileScreen";
import c from "../theme/colors";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const icons = {
  Home: "home-outline",
  Explore: "compass-outline",
  Favourites: "heart-outline",
  Quiz: "musical-notes-outline",
  Profile: "person-outline",
};
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: c.purple,
        tabBarInactiveTintColor: c.muted,
        tabBarStyle: { backgroundColor: c.surface, borderTopColor: c.border },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={icons[route.name]} color={color} size={size} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Favourites" component={FavoritesScreen} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default function AppNavigator() {
  return (
    <NavigationContainer
      theme={{
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: c.background,
          card: c.background,
          text: c.text,
          primary: c.purple,
          border: c.border,
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerTintColor: c.text,
          headerStyle: { backgroundColor: c.background },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ title: "MELODIA" }}
        />
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search & Filter" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Instrument details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
