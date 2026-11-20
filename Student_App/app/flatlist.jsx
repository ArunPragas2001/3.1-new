import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

// 1. The data: an array of objects, each with a unique id
const students = [
  { id: '1', name: 'Kamal' },
  { id: '2', name: 'Nimal' },
  { id: '3', name: 'Sunil' },
  { id: '4', name: 'Amal' },
  { id: '5', name: 'Saman' },
  { id: '6', name: 'Nuwan' },
  { id: '7', name: 'Kasun' },
  { id: '8', name: 'Ruwan' },
  { id: '9', name: 'Dinesh' },
  { id: '10', name: 'Chamara' },
]

const FlatListDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList Demo</Text>

      <FlatList
        data={students}                          // the array
        keyExtractor={(item) => item.id}         // unique key for each row
        renderItem={({ item }) => (              // how ONE row looks
          <View style={styles.row}>
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default FlatListDemo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    backgroundColor: '#eee',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
     color:'blue'
  },
})