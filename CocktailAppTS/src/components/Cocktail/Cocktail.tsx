import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface Props {
  data: object; 
};

interface State {
  stateData: string;
}

export default class Cocktail extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      stateData: ""
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>
          Helloooooooooooo
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: "red",
    borderWidth: 2
  },
});
