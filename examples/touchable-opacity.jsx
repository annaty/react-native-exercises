//touchable opacity - button that becomes thransparent when clicked

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Hit the Touchable Opacity button</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    }
};

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