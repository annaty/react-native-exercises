//scroll-view allows for scroll management within a view

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    height: 200,
    margin: 10,
  },
  squareSize: {
    width: 400,
  },
  row: {
    flexDirection: 'row'
  }
})

const Square = (props) => {
  return (
    <View style={[styles.square, { backgroundColor: props.color, width: props.width }]} />
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Square color='blue' />
        <ScrollView horizontal={true} style={styles.row}>
          <Square color='lightblue' width={400} />
          <Square color='lightblue' width={400} />
        </ScrollView>
        <Square color='blue' />
        <Square color='blue' />
      </ScrollView>
    </View>
  );
};

export default App;