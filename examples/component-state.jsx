// how message when a component is update (when the person gives an input)

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <TextInput
          style={{height: 40, padding: 10,}}
          placeholder="Input your name"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        {this.state.text && <Text style={{padding: 10, fontSize: 42}}>
          Hello and welcome {this.state.text}!
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black'
  }
});