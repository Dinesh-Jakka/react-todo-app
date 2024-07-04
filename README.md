# React To-Do Application

## Overview

This project is a simple To-Do application built using ReactJS. It allows users to add, view, edit, and delete tasks. The application demonstrates the use of React functional components, hooks, and state management with Redux. It also employs styled-components for styling the UI.

## Features

- Add a new task
- View a list of tasks
- Edit a task with a popup modal
- Delete a task
- Mark a task as completed
- Persistent storage using local storage

## Tech Stack

- ReactJS
- Redux
- Styled-Components

## Components

The application is built using the following components:

### TaskItem Component

- **Description:** Represents a single task in the to-do list.
- **File:** `src/components/TaskItem.js`
- **Responsibilities:** Display task details, handle task editing and deletion.

### TaskList Component

- **Description:** Manages the list of tasks.
- **File:** `src/components/TaskList.js`
- **Responsibilities:** Renders the list of tasks, handles adding new tasks.

### Redux

- **Description:** Manages application state.
- **Files:**
  - Actions: `src/redux/actions.js`
  - Reducers: `src/redux/reducers.js`
  - Store: `src/redux/store.js`

### Styles

- **Description:** Manages the styling of components.
- **File:** `src/styles/index.js`
- **Responsibilities:** Defines styled-components for consistent UI across the application.



## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Dinesh-Jakka/react-todo-app.git
2. Navigate to the project directory:
   ```
   cd react-todo-app
3. Install the dependencies:
   ```
   npm install 
### Usage 
1. Start the development server: 
   ```
   npm start
2. Open your browser and visit http://localhost:3000.
