import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageSourcePropType
} from "react-native";
import ModuleItem from "./components/ModuleItem";
import { SearchBar } from "react-native-elements";

export type moduleType = {
  id: number;
  name: string;
  description: string;
  teacher: string;
  year: string;
  icon: ImageSourcePropType;
};

export const modules: moduleType[] = [
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
  {
    id: 4,
    name: "Programming tools part 2",
    description: "Class on useful tools part 2 ",
    teacher: "B. Bunny",
    year: "3B",
    icon: require("./assets/module-icon/tool.png"),
  },
];

type AppProps = {
  moduleData: moduleType;
};

type AppState = {
  show: boolean;
  data: moduleType[];
  value: string;
};

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      show: false,
      data: modules,
      value: '',
    };
  }

  searchFilter = (text: string): any => {
    const arrayholder: moduleType[] = modules;
    this.setState({
      value: text,
    });

    const newData = arrayholder.filter((item: moduleType) => {
      const itemData = `${item.year.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    if (newData.length !== 0) {
      this.setState({
        data: newData,
      });
    }
  };

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));
  clearList = () => {
    this.setState({
      data: [],
    });
  };
  renderModule = ({ moduleData }: { moduleData: moduleType }) => <ModuleItem module={moduleData} />;
  onChangeText = (text = "") => this.searchFilter(text)

  render() {
    const moduleArray: moduleType[] = modules;
    return (
      <View style={styles.container}>
        <SearchBar
          platform="default"
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.textInput}
          placeholder="Search modules"
          lightTheme
          onChangeText={this.onChangeText}
          autoCorrect={false}
          value={this.state.value}
        />

        <TouchableOpacity onPress={this.toggle}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Show list</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.clearList}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Remove all modules from list
            </Text>
          </View>
        </TouchableOpacity>

        <FlatList
          style={this.state.show ? {} : { display: "none" }}
          data={this.state.data}
          renderItem={this.renderModule}
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
  searchContainer: {
    backgroundColor: "white",
  },
  inputContainer: {
    height: 40,
    borderRadius: 50,
    width: 250,
  },
  textInput: {
    fontSize: 14,
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
