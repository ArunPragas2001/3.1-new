import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: c.purple,
        tabBarInactiveTintColor: c.muted,
        tabBarStyle: {
          backgroundColor: c.background,
          borderTopColor: c.border,
          paddingTop: 9,
          paddingBottom: Math.max(insets.bottom, 10),
          height: 66 + Math.max(insets.bottom, 10),
        },
        tabBarLabelStyle: { fontSize: 10, fontWeight: "600", marginTop: 3 },
        tabBarIconStyle: { marginBottom: 2 },
        tabBarIcon: ({ color, focused }) => (
          <View
            style={{
              width: 42,
              height: 28,
              borderRadius: 12,
              backgroundColor: focused ? c.purpleSoft : "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name={icons[route.name]} color={color} size={21} />
          </View>
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
          headerShadowVisible: false,
          headerTitleStyle: { fontSize: 15, fontWeight: "700" },
          contentStyle: { backgroundColor: c.background },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{
            title: "Melodia",
            headerTitleAlign: "left",
            headerTitle: () => (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 9 }}
              >
                <View
                  style={{
                    width: 28,
                    height: 28,
                    backgroundColor: c.purple,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="musical-notes" size={16} color={c.ink} />
                </View>
                <Text
                  style={{
                    color: c.text,
                    fontSize: 21,
                    fontWeight: "800",
                    letterSpacing: -0.8,
                  }}
                >
                  melodia<Text style={{ color: c.purple }}>.</Text>
                </Text>
              </View>
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  marginRight: 8,
                }}
              >
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: c.green,
                  }}
                />
                <Text style={{ color: c.muted, fontSize: 10 }}>
                  OFFLINE READY
                </Text>
              </View>
            ),
          }}
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
