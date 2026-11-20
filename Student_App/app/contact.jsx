import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page </Text>

      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default Contact

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