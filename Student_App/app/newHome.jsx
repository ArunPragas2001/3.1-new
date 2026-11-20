
import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const students = [
    { id: '1', name: 'John', city: 'Kandy' },
    { id: '2', name: 'Sarah', city: 'Colombo' },
    { id: '3', name: 'David', city: 'Galle' },
    { id: '4', name: 'Amali', city: 'Kandy' },
];

export function HomeScreen({ navigation }) {

    const [search, setSearch] = useState('');

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.city.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={{ flex: 1, padding: 20 }}>

            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Student List
            </Text>

            <TextInput
                placeholder="Search by name or city"
                value={search}
                onChangeText={setSearch}
                style={styles.input}
            />

            <FlatList
                data={filteredStudents}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.student}>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>

                        <Text>City: {item.city}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text>No students found.</Text>
                }
            />

        </View>
    );
}

export function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Student List' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 15,
        borderRadius: 5,
    },

    student: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default App;
