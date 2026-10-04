# React Todo List

A simple and responsive Todo List application built using **React.js** and **Material UI (MUI)**. The application allows users to add tasks, mark tasks as completed, delete tasks, and track the number of remaining tasks.

## Features

* Add new tasks
* Mark tasks as completed using a checkbox
* Delete tasks
* Display the number of remaining tasks
* Prevent adding empty tasks
* Responsive and clean user interface
* Styled using Material UI components
* Component-based React structure

## Technologies Used

* **React.js**
* **Material UI (MUI)**
* **JavaScript (ES6+)**
* **HTML**
* **CSS**
* **Vite**

## Project Structure

```text
react-todo-list/
│
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── package-lock.json
└── README.md
```

## React Concepts Used

### useState

`useState` is used to manage the list of tasks and the input field.

```javascript
const [tasks, setTasks] = useState([])
```

### Props

Props are used to pass task data and functions between components.

For example:

```text
App
 ├── TodoForm
 └── TodoList
      └── TodoItem
```

### Array Methods

The application uses JavaScript array methods such as:

* `map()` – update tasks and display the task list
* `filter()` – delete tasks and calculate remaining tasks

### Event Handling

React event handlers are used for:

* Adding a task
* Checking/unchecking a task
* Deleting a task
* Handling input changes

## Components

### App.jsx

The main component that manages the application's state and task operations.

### TodoForm.jsx

Handles the input field and adding new tasks.

### TodoList.jsx

Displays the list of tasks and renders individual `TodoItem` components.

### TodoItem.jsx

Displays an individual task with:

* Checkbox
* Task text
* Delete button

## Material UI Components Used

The application uses MUI components such as:

* `Button`
* `TextField`
* `Checkbox`
* `Box`
* `Paper`
* `Stack`
* `Typography`

These components are used to create and style the user interface without writing extensive custom CSS.

## Installation and Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd react-todo-list
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available on the local development server provided by Vite.

## Future Improvements

* Add localStorage support
* Add task editing functionality
* Add task filtering (All / Active / Completed)
* Add due dates
* Add dark mode
* Add animations and transitions
