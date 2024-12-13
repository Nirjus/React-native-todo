import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface ToDoInputProps {
  onAddToDo: (text: string) => void;
}
const ToDoInput: React.FC<ToDoInputProps> = ({onAddToDo}) => {
  const [text, setText] = useState('');
  const handleAddTODO = () => {
    if (text.trim() !== '') {
      onAddToDo(text.trim());
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a new ToDo.."
        placeholderTextColor={'#9c9c9c'}
        value={text}
        onChangeText={setText}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.toDoBtn} onPress={handleAddTODO}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#7070fa',
    padding: 10,
    marginRight: 10,
  },
  toDoBtn: {
    backgroundColor: '#7070fa',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
