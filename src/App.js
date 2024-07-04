import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { AppContainer, Heading } from './styles';

const App = () => (
    <AppContainer>
      <Heading>Todos</Heading>
      <TaskInput />
      <TaskList />
    </AppContainer>
);


export default App;