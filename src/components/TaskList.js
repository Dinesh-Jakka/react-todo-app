import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask, editTask } from "../redux/actions";

import {
  ListContainer,
  SubHeading,
  ListItem,
  TaskText,
  EditButton,
  DeleteButton,
  EditPopup,
  PopupContent,
  PopupInput,
  PopupButton,
  CloseButton
} from "../styles";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  const handleEditTask = (task) => {
    setEditTaskId(task.id);
    setEditTaskText(task.text);
    setIsPopupOpen(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTask(editTaskId, editTaskText));
    setIsPopupOpen(false);
  };

  return (
    <>
      {tasks.length===0?(<SubHeading>No Tasks</SubHeading>):(<ListContainer>
        <SubHeading>My <span>Tasks</span></SubHeading>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <input
              id={task.id}
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <TaskText for={task.id} completed={task.completed}>{task.text}</TaskText>
            <EditButton onClick={() => handleEditTask(task)}><span class="material-symbols-outlined">edit</span></EditButton>
            <DeleteButton onClick={() => dispatch(deleteTask(task.id))}>
            <span class="material-symbols-outlined">delete</span>
            </DeleteButton>
          </ListItem>
        ))}
      </ListContainer>)}
      {isPopupOpen && (
        <EditPopup>
          <PopupContent>
            <CloseButton onClick={() => setIsPopupOpen(false)}>X</CloseButton>
            <PopupInput
              type="text"
              value={editTaskText}
              onChange={(e) => setEditTaskText(e.target.value)}
            />
            <PopupButton onClick={handleSaveEdit}>Save</PopupButton>
          </PopupContent>
        </EditPopup>
      )}
    </>
  );
};

export default TaskList;
