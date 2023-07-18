import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAllData = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data", data);
    setTodo(data);
  });
};

const addTodo = (text, isComplete, setText, setTodo) => {
  axios.post(`${baseUrl}/save-todo`, { text, isComplete }).then(({ data }) => {
    console.log("data", data);
    setText("");
    setTodo((prevTodo) => [...prevTodo, data]);
  });
};

const updateTodo = (_id, isComplete) => {
  axios.post(`${baseUrl}/update-todo`, { _id, isComplete }).then(({ data }) => {
    console.log("data", data);
  });
};

const deleteTodo = (_id) => {
  axios.post(`${baseUrl}/delete-todo`, { _id }).then(({ data }) => {
    console.log("data", data);
  });
};

export { getAllData, addTodo, updateTodo, deleteTodo };
