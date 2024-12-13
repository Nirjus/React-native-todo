import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ToDo} from '../types';
import ToDoEdit from './ToDoEdit';

interface ToDoItemProps {
  todo: ToDo;
  onDeleteTodo: () => void;
  onTogoleTodo: () => void;
  onEdit: (newText: string) => void;
}
const ToDoItem: React.FC<ToDoItemProps> = ({
  todo,
  onDeleteTodo,
  onTogoleTodo,
  onEdit,
}) => {
  const [edit, setEdit] = useState(false);
  const handelEdit = (newText: string) => {
    onEdit(newText);
    setEdit(false);
  };

  if (edit) {
    return (
      <ToDoEdit
        todo={todo}
        onSave={handelEdit}
        oncancel={() => setEdit(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoBtn} onPress={onTogoleTodo}>
        <Text
          style={[styles.todoText, todo?.completed && styles.textCompleted]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          disabled={todo.completed}
          style={[
            styles.edtBtn,
            todo.completed && {backgroundColor: '#9999fa'},
          ]}
          onPress={() => setEdit(true)}>
          <Text style={styles.edtText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dltBtn} onPress={onDeleteTodo}>
          <Text style={styles.edtText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  todoBtn: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#9c9c9c',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  edtBtn: {
    backgroundColor: '#7070fa',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dltBtn: {
    backgroundColor: '#ff8952',
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
