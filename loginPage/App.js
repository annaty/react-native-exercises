import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import koala from './assets/koala.png';
import atSymbol from './assets/at.png';
import glass from './assets/glass.png';

const users = [{ 'username': 'anna', 'email': 'anna', 'password': 'anna' },
{ 'username': 'me', 'email': 'ma', 'password': 'me' },
{ 'username': 'be', 'email': 'ba', 'password': 'boo' }]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

  }

  _forgottenPasword() {
    alert('Reinitialize the password');
  }

  _signIn() {
    let title = 'Connection';
    let message = '\nIncorrect credentials';
    for (let key in users) {
      let user = users[key];
      if (user.email == this.state.email && user.password == this.state.password) {
        message = ' with the email ' + this.state.email + ' and password ' + this.state.password;
        break;
      }
    }
    alert(title + message);
  }

  _signUp() {
    alert('Sign up');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={koala}
        />

        <View style={styles.fieldContainer}>
          <Image
            style={styles.icon}
            source={atSymbol}
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Image
            style={styles.icon}
            source={glass}
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <TouchableOpacity onPress={(event) => this._signIn()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.link} onPress={this._forgottenPasword}>Forgot my password</Text>
        <Text style={styles.link} onPress={this._signUp}>Sign up</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  inputField: {
    width: 250,
    justifyContent: 'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: 'white',
    margin: 20,
    justifyContent: 'center',
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'resize'
  },
  button: {
    backgroundColor: 'green',
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
  },
  link: {
    marginTop: 30,
  }
});
