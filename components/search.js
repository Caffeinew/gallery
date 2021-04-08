import { SearchIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

export default function search({ search, updateSearch, Update }) {
  function submit(event) {
    event.preventDefault();
    Update(encodeURIComponent(search));
  }
  return (
    <form
      onSubmit={submit}
      className="py-4 mt-12 mb-6 w-3/4 sm:w-full mx-auto sm:mx-0 flex justify-center items-center flex-col sm:flex-row"
    >
      <input
        value={search}
        onChange={(event) => updateSearch(event.target.value)}
        onFocus={() => updateSearch("")}
        type="text"
        className="py-1 px-2 rounded-xl border w-full sm:w-96 focus:outline-none focus:border-blue-300 dark:text-gray-50 dark:focus:border-gray-500 mb-4 sm:mb-0  dark:bg-gray-800 dark:border-gray-800"
      />
      <motion.button
        whileTap={{ scale: 1.1 }}
        type="submit"
        className="flex items-center justify-center sm:justify-start w-full sm:w-auto bg-blue-400 dark:bg-blue-700 text-gray-100 py-2 pl-3 pr-5 rounded ml-0 sm:ml-4 focus:outline-none focus:bg-blue-500"
      >
        <SearchIcon className="w-5 h-5 mr-1" />
        Поиск
      </motion.button>
    </form>
  );
}
