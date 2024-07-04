import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #f9fbfe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 46px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration:underline;
  color: #f55b5b;
`;

export const SubHeading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 700;
  span {
    font-weight: 500;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  background-color: white;
  width: 60%;
  border-style: solid;
  border-width: 2px;
  border-color: #a4a7ab;
  border-radius: 10px;
  margin-top: 10px;
  padding: 13px;
`;

export const Button = styled.button`
  color: white;
  background-color: #4c63b6;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  border-width: 0;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 7px 20px;
  cursor: pointer;

  &:hover {
    background-color: #3a4a90;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  width: 50%;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e6f6ff;
  border-style: solid;
  border-width: 5px;
  border-color: #096f92;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 4px;
  margin-top: 15px;
  padding: 10px;
`;

export const TaskText = styled.label`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  flex-grow: 1;
  margin-left: 10px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  margin-right: 10px;
  background-color: #ffc107;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  color:#eee;

  &:hover {
    background-color: #c82333;
  }
`;

export const EditPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopupInput = styled.input`
  width: 250px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #e4e7eb;
`;

export const PopupButton = styled.button`
  color: white;
  background-color: #4c63b6;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #3a4a90;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: #c82333;
  }
`;
