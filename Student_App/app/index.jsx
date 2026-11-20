import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default function App() {
  const students = [
    { id: 1, name: 'Arun', reg: '2022/ICT/002',city:"Nawalapitiya" },
    { id: 2, name: 'Suleka', reg: '2022/ICT/001',city:"Kandy" },
    { id: 3, name: 'Nethsara', reg: '2022/ICT/003',city:"Kuliyapitiya" },
  ];

  const [text, setText] = useState('');
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState('');

  
  const filteredStudents = students.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.city.toLowerCase().includes(search.toLowerCase()) 

  );

 

  // Add entered name
  const handleSubmit = () => {
    const trimmed = text.trim();

    if (trimmed === '') {
      return;
    }

    setEntries([...entries, trimmed]);
    setText('');
  };

  return (
    
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.text}>University of Vavuniya</Text>


      <TextInput
        style={styles.searchBar}
        placeholder="Search students..."
        value={search}
        onChangeText={setSearch}
      />


      {filteredStudents.map((item) => (
        <TouchableOpacity key={item.id} style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.reg}>{item.reg}</Text>
          <Text style={styles.reg}>{item.city}</Text>
        </TouchableOpacity>
      ))}


      {filteredStudents.length === 0 && (
        <Text style={styles.noResults}>No students found</Text>
      )}


      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Add Name</Text>
      </TouchableOpacity>

      
      <View style={styles.list}>
        {entries.map((entry, index) => (
          <Text key={index} style={styles.entry}>
            {index + 1}. {entry}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'blue',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },

  searchBar: {
    backgroundColor: 'white',
    width: 250,
    height: 45,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },

  row: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    width: 250,
    borderRadius: 8,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  reg: {
    fontSize: 14,
    color: 'gray',
  },

  noResults: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
  },

  input: {
    backgroundColor: 'white',
    width: 250,
    height: 45,
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },

  button: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: 250,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  list: {
    width: 250,
    marginTop: 15,
  },

  entry: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 3,
    borderRadius: 8,
    fontSize: 16,
  },
});