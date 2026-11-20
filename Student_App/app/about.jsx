import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import { useTheme } from '../contexts/ThemeContext'

const About = () => {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.container,{backgroundColor:theme.background}]}>
      <Text style={styles.title}>About Page </Text>
      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
     container:{
        flex:1, // default column direction
        alignItems:'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    link:{
        marginVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'blue',
        color:'blue'
    }
})