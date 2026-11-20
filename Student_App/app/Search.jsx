import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

export default function Index() {
  const [search, setSearch] = useState("");

  const students = [
    { id: "1", name: "Arun" },
    { id: "2", name: "Kannan" },
    { id: "3", name: "Nimal" },
    { id: "4", name: "Kasun" },
    { id: "5", name: "Pragas" },
  ];

  const filteredStudents = students.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Search</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search students..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  searchBar: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  item: {
    fontSize: 18,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});