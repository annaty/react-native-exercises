import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Provider as PaperProvider, Searchbar } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import Cocktail from '../src/components/Cocktail/Cocktail';
import { ICocktail } from '../src/components/Cocktail/Cocktail';

interface Props {
  navigation: RootTabScreenProps<'TabOne'>
};

interface State {
  isLoaded?: boolean;
  data?: ICocktail[];
  query?: string;
  value: string;
};

export default class TabOneScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: [],
      query: "",
      value: ""

    }
  }

  fetchData(text: string) {
    this.setState({ value: text });
    const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    console.log(url + text);
    fetch(url + text, {
      mode:'no-cors'
    })
      .then(response => response.json()
      )
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson.drinks,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeText = (text: string) => this.fetchData(text);
  
  render() {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Searchbar
            placeholder="Search cocktails"
            onChangeText={this.onChangeText}
            value={this.state.value}
          />
          <FlatList
            data={this.state.data}
            renderItem={ ({item}) => <Cocktail item={item} /> }
            keyExtractor={(item: ICocktail) => item.idDrink.toString()}
          />
        </View>
      </PaperProvider>
    );
  } 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
