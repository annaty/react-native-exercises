import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';

const data = [
    { id: 0, firstName: "Benoit", lastName: "lastname" },
    { id: 1, firstName: "Me", lastName: "LASTNAME" },
    { id: 2, firstName: "Hello 1", lastName: "LastName" },
    { id: 3, firstName: "Hello 2", lastName: "lastnamE" },
    { id: 4, firstName: "Hello 3", lastName: "Lastname" },
]

const Person = ({ name, lastname }) => {
    return (
        <View style={[styles.item]}>
            <Text style={styles.name}>{name} {lastname.toUpperCase()}</Text>
        </View>
    );
};

const App = () => {
    const renderItem = ({ item }) => (
        <Person name={item.firstName} lastname={item.lastName}/>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    item: {
        backgroundColor: 'lightblue',
        padding: 20,
        width: Dimensions.get('window').width,
        margin: 5,
    },
    name: {
        fontSize: 20,
    }
});

export default App;