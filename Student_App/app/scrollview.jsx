import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
 
const ScrollViewDemo = () => {
  return (
    // ScrollView lets the screen scroll when content is taller than the screen
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>ScrollView Demo</Text>
 
      <View style={[styles.box, { backgroundColor: 'tomato' }]}><Text>Box 1</Text></View>
      <View style={[styles.box, { backgroundColor: 'orange' }]}><Text>Box 2</Text></View>
      <View style={[styles.box, { backgroundColor: 'gold' }]}><Text>Box 3</Text></View>
      <View style={[styles.box, { backgroundColor: 'lightgreen' }]}><Text>Box 4</Text></View>
      <View style={[styles.box, { backgroundColor: 'skyblue' }]}><Text>Box 5</Text></View>
      <View style={[styles.box, { backgroundColor: 'violet' }]}><Text>Box 6</Text></View>
 
      <Link href="/" style={styles.link}>Back Home</Link>
    </ScrollView>
  )
}
 
export default ScrollViewDemo
 
const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  box: {
    width: '100%',
    height: 150,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    color:'blue'
  },
})
 
