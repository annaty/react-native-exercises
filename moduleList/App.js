import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ModuleItem from './components/ModuleItem';

const modules = [
  { 'id': 0, 'name': 'Introduction to programming', 'description': 'An introductory class to procedural programming', 'teacher': 'B. Obama', 'year': '1A', 'icon': './assets/module-icon/computer.png' },
  { 'id': 1, 'name': 'Math', 'description': 'Class on probability and statistics', 'teacher': 'M. Obama', 'year': '1A', 'icon': './assets/module-icon/math.png' },
  { 'id': 2, 'name': 'Robotics', 'description': 'Introductory class to robotics', 'teacher': 'G. Bush', 'year': '2A', 'icon': './assets/module-icon/robot.png' },
  { 'id': 3, 'name': 'Programming tools', 'description': 'Class on useful tools', 'teacher': 'H. Clinton', 'year': '3A', 'icon': './assets/module-icon/tool.png' }

]

export default function App() {
  const renderModule = ({ module }) => (
    <ModuleItem props={props} />
  ); 
  return (
    <View>
      <FlatList
        data={modules}
        renderItem={renderModule}
        keyExtractor={module => module.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
