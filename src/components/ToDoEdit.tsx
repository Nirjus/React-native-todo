import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ToDo} from '../types';

interface ToDoEditprops {
  todo: ToDo;
  onSave: (newText: string) => void;
  oncancel: () => void;
}
const ToDoEdit = ({todo, onSave, oncancel}: ToDoEditprops) => {
  const [text, setText] = useState(todo?.text);
  const handleSave = () => {
    if (text.trim() !== '') {
      onSave(text.trim());
    }
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.edtText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={oncancel}>
          <Text style={styles.edtText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoEdit;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#7070fa',
    padding: 10,
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  saveBtn: {
    backgroundColor: '#51df7b',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#eb5f3c',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edtText: {
    color: 'white',
  },
});
