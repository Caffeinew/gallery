import Card from "../components/card";
import Search from "../components/search";
import DummyCards from "../components/dummyCards";
import { ViewGridIcon, EmojiSadIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

export default function index() {
  const dummy = new Array(20).fill(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(25);

  useEffect(() => {
    window.onscroll = function () {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        if (page < total) {
          setPage(page + 1);
        }
      }
    };
  });

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=20990566-a736427b048592d450fe30b92&q=${term}&image_type=photo&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(images.concat(data.hits));
        setIsLoading(false);
        setTotal(Math.ceil(data.totalHits / 20));
      })
      .catch((error) => console.log(error));
  }, [term, page]);
  return (
    <>
      <ViewGridIcon className="w-16 text-blue-400 relative my-6 mx-auto sm:m-12 " />
      <Search
        SearchText={(text) => {
          setImages([]);
          setTerm(text);
          setPage(1);
        }}
      />
      <div className="p-8 sm:p-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {isLoading ? (
          <DummyCards array={dummy} />
        ) : (
          images.map((obj, index) => <Card data={obj} key={index} />)
        )}
      </div>
      {!isLoading && images.length === 0 && (
        <h1 className="flex flex-col justify-center items-center w-full">
          <EmojiSadIcon className="w-1/5 text-blue-400" />
          <span className="text-gray-500 text-3xl text-center">
            Ничего не найдено
          </span>
        </h1>
      )}
    </>
  );
}
