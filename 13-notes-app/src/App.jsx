import React from "react";

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <form  onSubmit={(e)=> {
        submitHandler(e)
      }} className="flex flex-col items-start gap-4 p-10">
        <div className="flex w-1/2 flex-col gap-4">
          <input
            type="text"
            placeholder="Enter task heading"
            className="w-full rounded border-2 bg-transparent px-5 py-2 outline-none"
          />

          <textarea
            placeholder="Write details"
            className="h-24 w-full rounded border-2 bg-transparent px-5 py-2 outline-none resize-none"
          />

          <button
            type="submit"
            className=" rounded bg-white px-5 py-2 text-black"
          >
            Add Note
          </button>
       
        </div>
      </form>
    </div>
  );
};

export default App;
