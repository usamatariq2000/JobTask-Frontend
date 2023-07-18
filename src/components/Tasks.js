import React from "react";
import {
  getAllData,
  updateTodo,
  deleteTodo,
  addTodo,
} from "../utils/HandleApi";
import { useEffect, useState } from "react";
import moment from "moment";
import TodoBar from "./TodoBar";

export default function Tasks() {
  const [todo, setTodo] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [title, setTitle] = useState("");
  var isComplete = false;

  const TaskList = () => {
    return (
      <>
        {todo.map((item) => (
          <div className="w-full" key={item._id}>
            <div className="h-16 border-b-2 border-slate-700 flex flex-row align-items-center ">
              {item.isComplete ? (
                <img
                  src={require("../media/check1.png")}
                  className="h-10 w-10 ml-5"
                  alt="check mark"
                  onClick={() =>
                    handleToggleComplete(item._id, item.isComplete)
                  }
                />
              ) : (
                <img
                  src={require("../media/check.png")}
                  className="h-10 w-10  ml-5"
                  alt="check mark"
                  onClick={() =>
                    handleToggleComplete(item._id, item.isComplete)
                  }
                />
              )}

              <text className="font-medium text-lg ml-5">{item.text}</text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                fill="#A49377"
                onClick={() => toggleInfo(item._id)}
                className="w-6 h-6 flex ml-auto mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.54 8.31a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM6.46 8.31a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM17.54 20.61a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM6.46 20.61a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92z"
                />
              </svg>
            </div>
            {showInfo[item._id] ? (
              <div className="flex flex-col items-start p-5 bg-white bg-opacity-90 ">
                <span>
                  Completed: {item.isComplete ? "Completed" : "Not Completed"}{" "}
                </span>

                <span>
                  Created At:{" "}
                  {moment(item.timeStamp).format("YYYY-MM-DD hh:mm A")}
                </span>

                <button
                  onClick={() => handleDeleteTodo(item._id)}
                  className="bg-red-100 rounded w-full mt-4 hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </>
    );
  };

  const toggleInfo = (itemId) => {
    setShowInfo((prevInfo) => ({
      ...prevInfo,
      [itemId]: !prevInfo[itemId],
    }));
  };

  const handleAddTodo = async (itemId) => {
    const newTask = await addTodo(title, isComplete, setTitle, setTodo);
    console.log("hello", newTask);
  };

  const handleDeleteTodo = async (itemId) => {
    await deleteTodo(itemId);
    setTodo((prevTodo) => prevTodo.filter((item) => item._id !== itemId));
  };

  const handleToggleComplete = async (itemId, isComplete) => {
    await updateTodo(itemId, !isComplete);
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item._id === itemId ? { ...item, isComplete: !isComplete } : item
      )
    );
  };

  useEffect(() => {
    getAllData(setTodo);
  }, []);

  return (
    <>
      {/* The code below is for the text field and making a todo task. */}

      <div className="flex mb-4 mt-5 w-full p-2 rounded bg-white">
        <input
          type="text"
          placeholder="Add a Task"
          className="flex-grow p-2 mr-2 bg-white focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => {
            handleAddTodo();
          }}
          className="flex-shrink-0 p-2 bg-[#bbb18c] text-white rounded hover:bg-[#d8d2bd] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      {/* The code above is for the todo bar that apear on top of the list. */}

      <TodoBar />

      {/* The code below is for the list and to show the tasks. */}
      <div
        className={`bg-white opacity-90 mt-2 overflow-y-scroll w-full h-64 bg-opacity-70 rounded ${
          todo.length > 0 ? "justify-start" : "justify-center"
        } flex-col flex`}
      >
        {todo.length > 0 ? (
          <TaskList />
        ) : (
          <text className="text-center justify-self-center align-self-center  fs-l text-black text-xl">
            No tasks today
          </text>
        )}
      </div>
    </>
  );
}
