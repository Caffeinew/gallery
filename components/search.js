import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function search({ SearchText }) {
  const [text, setText] = useState("");
  const submit = (event) => {
    event.preventDefault();
    SearchText(text);
  };
  return (
    <form
      onSubmit={submit}
      className="py-4 my-6 sm:my-12 w-3/4 sm:w-full mx-auto sm:mx-0 flex justify-center items-center flex-col sm:flex-row"
    >
      <input
        onChange={(event) => setText(event.target.value)}
        type="text"
        className="py-1 px-2 rounded-xl border w-full sm:w-96 focus:outline-none focus:border-blue-300 mb-4 sm:mb-0"
      />
      <button
        type="submit"
        className="flex items-center justify-center sm:justify-start w-full sm:w-auto bg-blue-400 text-gray-100 py-2 pl-3 pr-5 rounded-xl ml-0 sm:ml-4 focus:outline-none focus:bg-blue-500"
      >
        <SearchIcon className="w-5 mr-1" />
        Поиск
      </button>
    </form>
  );
}
