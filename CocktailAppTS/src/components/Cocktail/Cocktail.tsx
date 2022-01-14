import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

export interface ICocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
}

interface Props {
  item: ICocktail; 
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
    console.log(this.props.item);
    return(
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.thumbnail}
            source={{uri: this.props.item.strDrinkThumb}}
          />
        </View>
        <View >
          <Text style={styles.title}>{this.props.item.strDrink}</Text>
          <Text>{this.props.item.strAlcoholic}</Text>
          <Text style={styles.subtitle}>Type of glass: {this.props.item.strGlass}</Text>
        </View>
      </View>
      
    )
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 5,
    flexDirection: "row",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: 350,
  },
  imageContainer: {
    marginRight: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    alignSelf: "flex-end",
    color: "gray",
  }
});
