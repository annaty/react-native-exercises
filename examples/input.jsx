import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  // _onSubmitEdit() {
  //   alert('Helloooo');
  // }

  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <TextInput
        style={{height: 40}}
        placeholder="Input your name"
        // onChangeText={text => setText(text)}
        // onSubmitEditing={this._onSubmitEdit}
        // defaultValue={text}
      />
    </View>
  );
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

export default App;