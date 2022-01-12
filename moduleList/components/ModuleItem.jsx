import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Module extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{this.props.data.module.item.name}</Text>
                    <Text style={styles.description}>{this.props.data.module.item.description}</Text>
                </View>
                <View>
                    <Text style={styles.year}>{this.props.data.module.item.year}</Text>
                    {/* <Image
                        style={styles.icon}
                        source={}
                    /> */}
                </View>
                <Text style={styles.teacher}>{this.props.data.module.item.teacher}</Text>
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
    year: {
        fontSize: 36,
    },
    icon: {
        width: 50,
    },
    teacher: {
        fontSize: 24,
    }
});
