# Todo-App-v3

A simple and modern Todo application built with React. This version uses React Context and the `useReducer` hook for state management, allowing users to add and delete todo items with due dates.

## Features

- Add new todo items with a name and due date
- Delete existing todo items
- Responsive and clean UI using Bootstrap
- State management using React Context and `useReducer`
- Component-based architecture

## Folder Structure

```
src/
  components/
    AddTodo.jsx
    AppName.jsx
    TodoItem.jsx
    TodoItems.jsx
    WelcomeMsg.jsx
  store/
    todo-items-store.jsx
  App.jsx
  main.jsx
  App.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn

### Installation

1. Clone the repository or copy the project folder.
2. Navigate to the project directory:

   ```sh
   cd "React JS/React-Projects/Todo-App-v3"
   ```

3. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Usage

- Enter a todo name and select a due date, then click the add button to add a new todo.
- Click the delete icon next to a todo item to remove it from the list.

## Technologies Used

- React
- React Context API
- useReducer Hook
- Bootstrap 5

## License

This project is for educational purposes.
