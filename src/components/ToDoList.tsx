import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {ToDo} from '../types';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  todoList: ToDo[];
  onDeleteTodo: (id: string) => void;
  togoleTodo: (id: string) => void;
  onEditTodo: (id: string, text: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
  todoList,
  onDeleteTodo,
  togoleTodo,
  onEditTodo,
}) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={() => onDeleteTodo(todo.id)}
          onTogoleTodo={() => togoleTodo(todo.id)}
          onEdit={(newText: string) => onEditTodo(todo.id, newText)}
        />
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
