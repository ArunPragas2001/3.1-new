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
   
    { },
    { id: 2, name: 'Suleka', reg: '2022/ICT/001' },
    { id: 3, name: 'Nethsara', reg: '2022/ICT/003' },
  ];

  const [text, setText] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (trimmed === '') 
      return;
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

      {students.map((item) => (
        <TouchableOpacity key={item.id} style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.reg}>{item.reg}</Text>
          <Text style={styles.reg}>{item.reg}</Text>
        </TouchableOpacity>
      ))}

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
        blurOnSubmit={false}
      />

      {}
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
  input: {
    backgroundColor: 'white',
    width: 250,
    height: 45,
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
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