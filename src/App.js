import "./App.css";
import UserProfile from "./components/ProfilePic";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div className="app_container bg-slate-400  flex items-center justify-center h-screen w-screen">
        <div className="todo_container w-4/5  md:w-3/5 lg:w-2/5 flex flex-col items-center justify-around ">
          <UserProfile />
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;
