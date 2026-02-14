import React, { useState } from "react";
import { CopyPlus, X } from "lucide-react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detailed });

    setTask(copyTask);
    console.log(task);

    setTitle("");
    setDetailed("");
  };

  const [title, setTitle] = useState("");
  const [detailed, setDetailed] = useState("");

  const [task, setTask] = useState([]);

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:w-1/2 items-start gap-4 p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* First input for heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* Detailed input for heading */}

        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
          placeholder="Write Details"
          value={detailed}
          onChange={(e) => {
            setDetailed(e.target.value);
          }}
        ></textarea>

        <button className="bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap  items-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col items-start p-4 relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2  leading-tight font-medium text-grat-500">
                    {elem.detailed}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
