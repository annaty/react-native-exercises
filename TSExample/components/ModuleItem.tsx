import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { modules } from '../App';
import { moduleType } from '../App';

type ModuleProps = {
    module: any;
};

type ModuleState = {
    imagePath: ModuleState;
    modules: moduleType[];
}

export default class ModuleItem extends Component<ModuleProps, ModuleState> {
    constructor(props: ModuleProps) {
        super(props);
        this.state = {
            imagePath: "",
            modules: modules,
        };
    }

    render() {
        if (!this.state.modules) {
            this.setState( this.state.imagePath: modules.find((x: moduleType) => x.id == this.props.data.module.item.id).icon );
            }
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
                    <Text style={styles.teacher}>Teacher: {this.props.data.module.item.teacher}</Text>
                </View>
                <Image
                    style={styles.icon}
                    source={this.state.imagePath}
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
