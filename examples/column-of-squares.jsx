//simple style and use of some props

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    marginTop: 50,
  }
})

const Square = (props) => {
  return (
    <View style={[styles.square, { backgroundColor: props.color }]}>
      <Text></Text>
    </View>
  );
};

const FixedDimensionsBasics = () => {
  return (
    <View style={styles.container}>
      <Square color='red' />
      <Square color='blue' />
      <Square color='yellow' />
    </View>
  );
};

export default FixedDimensionsBasics;