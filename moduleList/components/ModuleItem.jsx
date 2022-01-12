import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Module extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{props.name}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
                <View>
                    <Text style={styles.year}>{props.year}</Text>
                    {/* <Image
                        style={styles.icon}
                        source={}
                    /> */}
                </View>
                <Text style={styles.teacher}>{props.teacher}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 24,
        color: 'gray'
    },
    year : {
        fontSize: 36,
    },
    icon: {
        width: 50,
    },
    teacher: {
        fontSize: 24,
    }
});
