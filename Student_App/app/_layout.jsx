import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import LightLogo from '../assets/img/light.png'
import DarkLogo from '../assets/img/dark.png'
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'
import { Ionicons } from '@expo/vector-icons'

//  npx expo install @expo/vector-icons
const LayoutContent = () => {
  const { scheme, theme, toggleTheme } = useTheme()

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Tabs screenOptions={
          {
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
            headerRight: () => (
              <Pressable onPress={toggleTheme} hitSlop={10}>
                <Image
                  source={scheme === 'dark' ? LightLogo : DarkLogo}
                  style={styles.toggleIcon}
                />
              </Pressable>
              // <Button title="Click me" onPress={() => alert('Pressed')} color="green" />
            // Button is a built-in, ready-made button. It’s very limited: you can only set title, onPress, color and disabled.
            // Pressable is the modern, recommended choice. It has no built-in look, so you put any content inside (text, icons, images)
          ),
            tabBarStyle: { backgroundColor: theme.navBackground },
            tabBarActiveTintColor: theme.title,
            tabBarInactiveTintColor: 'gray',

          }}>
          <Tabs.Screen name="index" options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }} />
          <Tabs.Screen name="about" options={{
            title: 'About', tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} />
            ),
          }} />
          <Tabs.Screen name="contact" options={{
            title: 'Contact', tabBarIcon: ({ color, size }) => (
              <Ionicons name="call" size={size} color={color} />
            ), headerShown: false
          }} />

          <Tabs.Screen name="search" options={{
            title: 'search', tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ), headerShown: false
          }} />



          <Tabs.Screen name="scrollview" options={{ title: 'ScrollView' }} />
          <Tabs.Screen name="flatlist" options={{ title: 'FlatList' }} />
        </Tabs>
      
          
        

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 Student App. All Rights Reserved.
          </Text>
        </View>
      </View></>
  )
}

const RootLayout = () => (
  <ThemeProvider>
    <LayoutContent />
  </ThemeProvider>
)
export default RootLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, toggleIcon: { width: 28, height: 28, resizeMode: 'contain' },

  footer: {
    backgroundColor: '#2c3e50',
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#34495e',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
})