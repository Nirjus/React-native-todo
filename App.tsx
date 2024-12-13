/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToDoInput from './src/components/ToDoInput';
import ToDoList from './src/components/ToDoList';
import {ToDo} from './src/types';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<ToDo[]>([]);
  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text: text,
        completed: false,
      },
    ]);
  };
  console.log(todoList);
  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };
  const togoleToDo = (id: string) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  const editTodo = (id: string, newText: string) => {
    console.log(id, newText);
    setTodoList(
      todoList.map(todo => (todo.id === id ? {...todo, text: newText} : todo)),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>App</Text>
      <ToDoInput onAddToDo={addTodo} />
      <ToDoList
        togoleTodo={togoleToDo}
        todoList={todoList}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  headertext: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
