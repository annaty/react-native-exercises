import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Module extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={styles.itemDetails}>
                    <View >
                        <View style={styles.row}>
                            <Text style={styles.title}>{this.props.data.module.item.name}</Text>
                            <Text style={styles.year}>{this.props.data.module.item.year}</Text>
                        </View>
                        <View>
                            <Text style={styles.description}>{this.props.data.module.item.description}</Text>
                        </View>
                    </View>
                    <Text style={styles.teacher}>{this.props.data.module.item.teacher}</Text>
                </View>
                {/* <Image
                    style={styles.icon}
                    source={{
                        uri: this.props.data.module.item.icon,
                    }}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 20,
    },
    itemDetails: {
        width: 250,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        marginLeft: 10,
    },
    icon: {
        width: 50,
    },
    teacher: {
        fontSize: 24,
        alignSelf: 'flex-end',
        marginTop: 50,
    }
});
