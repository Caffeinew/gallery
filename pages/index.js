import Card from "../components/card";
import Search from "../components/search";
import { ViewGridIcon, EmojiSadIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

export default function index() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=20990566-a736427b048592d450fe30b92&q=${term}&image_type=photo`,
      [term]
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  });
  return (
    <>
      <ViewGridIcon className="w-16 text-blue-400 relative my-6 mx-auto sm:m-12 " />
      <Search SearchText={(text) => setTerm(text)} />

      {images.length === 0 && !isLoading ? (
        <h1 className="flex flex-col justify-center items-center w-full">
          <EmojiSadIcon className="w-1/5 text-blue-400"/> 
          <span className="text-gray-500 text-3xl text-center">Ничего не найдено</span> 
        </h1>
      ) : (
        <div className="p-8 sm:p-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {images.map((obj) => (
            <Card data={obj} key={obj.id} />
          ))}
        </div>
      )}
    </>
  );
}
