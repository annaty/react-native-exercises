import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';

const data = [
    { id: 0, firstName: "Benoit" },
    { id: 1, firstName: "Me" },
    { id: 2, firstName: "Hello 1" },
    { id: 3, firstName: "Hello 2" },
    { id: 4, firstName: "Hello 3" },
]

const Item = ({ name }) => {
    return (
        <View style={[styles.item]}>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

const App = () => {
    const renderItem = ({ item }) => (
        <Item name={item.firstName} />
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