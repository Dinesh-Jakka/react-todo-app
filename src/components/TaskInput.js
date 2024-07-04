import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { InputContainer, Input, Button, SubHeading } from '../styles';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === '') {
      alert('Enter Valid Text');
      return;
    }
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <InputContainer>
      <SubHeading>Create <span>Task</span></SubHeading>
      <Input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="What needs to be done?"
      />
      <Button onClick={handleAddTask}>Add</Button>
    </InputContainer>
  );
};

export default TaskInput;
