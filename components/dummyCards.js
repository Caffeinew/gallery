export default function dummyCards(props) {
  return (
    props.array.map((dummy, index) => (
        <div className="w-auto shadow-lg card flex flex-col" key={index}>
      <span className="h-64 w-full border" />
      <div className="flex px-8 pt-8 items-center relative">
        <span className="shadow w-24 h-24 rounded-full absolute -top-12 right-4 border-4 border-gray-200 bg-gray-100 dark:bg-gray-900 dark:border-gray-800" />
        <h1 className=" my-3 h-6 bg-gray-200 dark:bg-gray-600 w-2/5 rounded-lg"></h1>
      </div>
      <div className="w-full px-8 pb-8">
        <span className="flex my-2 h-4 bg-gray-100 dark:bg-gray-700 w-3/4 rounded-xl"></span>
        <span className="flex my-2 h-4 bg-gray-100 dark:bg-gray-700 w-5/6 rounded-xl"></span>
        <span className="flex my-2 h-4 bg-gray-100 dark:bg-gray-700 w-4/6 rounded-xl"></span>
      </div>
    </div>
    ))
  );
}
