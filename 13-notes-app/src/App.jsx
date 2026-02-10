import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Note added");
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:w1/2 items-start gap-4 p-10"
      >
        <div className="flex w-1/2 flex-col gap-4">
          <input
            type="text"
            placeholder="Enter task heading"
            className="w-full rounded border-2 bg-transparent px-5 py-2 outline-none"
          />

          <textarea
            placeholder="Write details"
            className="h-24 w-full resize-none rounded border-2 bg-transparent px-5 py-2 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded bg-white px-5 py-2 font-medium text-black"
          >
            Add Note
          </button>
        </div>
      </form>
      <div className="flex  bg-red-950  gap-5 flex-wrap p-10">
        <h1 className="">You are notes </h1>
        <div className="h-52 w-40 bg-white rounded"></div>
        <div className="h-52 w-40 bg-white rounded"></div>

      </div>
    </div>
  );
};

export default App;
