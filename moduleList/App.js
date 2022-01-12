import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import ModuleItem from "./components/ModuleItem";
// import { SearchBar } from 'react-native-elements';cd

export const modules = [
	{
		id: 0,
		name: "Introduction to programming",
		description: "An introductory class to procedural programming",
		teacher: "B. Obama",
		year: "1A",
		icon: require("./assets/module-icon/computer.png"),
	},
	{
		id: 1,
		name: "Math",
		description: "Class on probability and statistics",
		teacher: "M. Obama",
		year: "1A",
		icon: require("./assets/module-icon/math.png"),
	},
	{
		id: 2,
		name: "Robotics",
		description: "Introductory class to robotics",
		teacher: "G. Bush",
		year: "2A",
		icon: require("./assets/module-icon/robot.png"),
	},
	{
		id: 3,
		name: "Programming tools",
		description: "Class on useful tools",
		teacher: "H. Clinton",
		year: "3A",
		icon: require("./assets/module-icon/tool.png"),
	},
];

export default class App extends Component {
  state = {
    show: false
  }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  clearList = () => (modules = []);
	renderModule = ({ moduleData }) => <ModuleItem module={{ moduleData }} />;

  renderHeader = () => {
    return (
        <SearchBar
        placeholder="Search Module..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        value={this.state.value}
        />
    );
  };

	render() {
		return (
			<View style={styles.container}>
        <TouchableOpacity onPress={this.toggle}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Show list</Text>
					</View>
				</TouchableOpacity>

        <TouchableOpacity onPress={this.clearList}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Remove all modules from list</Text>
					</View>
				</TouchableOpacity>

				<FlatList
          style={this.state.show ? {} : { display: 'none' }}
					data={modules}
					renderItem={(module) => <ModuleItem data={{ module }} />}
					keyExtractor={(module) => module.id.toString()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
  button: {
		backgroundColor: "green",
		width: 250,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
    margin: 10,
	},
  buttonText: {
		color: "white",
	},
});
