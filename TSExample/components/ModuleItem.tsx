import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { moduleType } from '../App';

type ModuleProps = {
    data: moduleType;
};

export default class ModuleItem extends Component<ModuleProps, any> {
    constructor(props: ModuleProps) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemDetails}>
                    <View >
                        <View style={styles.row}>
                            <Text style={styles.title}>{this.props.data.name}</Text>
                            <Text style={styles.year}>{this.props.data.year}</Text>
                        </View>
                        <View>
                            <Text style={styles.description}>{this.props.data.description}</Text>
                        </View>
                    </View>
                    <Text style={styles.teacher}>Teacher: {this.props.data.teacher}</Text>
                </View>
                <Image
                    style={styles.icon}
                    source={this.props.data.icon}
                />
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
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
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
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 20,
        color: 'gray'
    },
    year: {
        fontSize: 36,
        marginLeft: 20,
    },
    icon: {
        width: 100,
        height: 100,
        marginLeft: 25,
    },
    teacher: {
        fontSize: 16,
        alignSelf: 'flex-end',
        marginTop: 40,
        marginBottom: 10,
    }
});
