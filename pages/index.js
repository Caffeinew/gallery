import Card from "../components/card";
import Search from "../components/search";
import DummyCards from "../components/dummyCards";
import Alert from "../components/alert";
import Head from "next/head";
import Link from "next/link";
import {
  ViewGridIcon,
  EmojiSadIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Nprogress from "nprogress";
import smoothscroll from "smoothscroll-polyfill";

export default function index() {
  const dummy = new Array(20).fill(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(25);
  const [scrollBtn, setScrollBtn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    isLoading ? Nprogress.start() : Nprogress.done();
  }, [isLoading]);

  useEffect(() => {
    window.onscroll = () => setCurrentScroll(window.pageYOffset);
  });

  useEffect(() => {
    currentScroll > 250 ? setScrollBtn(true) : setScrollBtn(false);
    window.innerHeight + currentScroll >= document.body.offsetHeight &&
      page < total &&
      setPage(page + 1);
  }, [currentScroll]);

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
      <Head>
        <title>Caffeine gallery</title>
      </Head>
      <ViewGridIcon className="w-16 h-16 text-blue-400 relative my-6 mx-auto sm:m-12 " />
      <Search
        SearchText={(text) => {
          if (text != term) {
            setIsLoading(true);
            setImages([]);
            setTerm(text);
            setPage(1);
          } else {
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3100);
          }
        }}
      />
      {showAlert && <Alert text="Запрос уже выполнен" />}
      <div className="p-8 sm:p-4 sm:pb-8 mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {isLoading ? (
          <DummyCards array={dummy} />
        ) : (
          images.map((obj, index) => (
            <Link href={"/image/" + obj.id} key={index}>
              <a className="w-auto shadow-lg card flex flex-col">
                <Card data={obj} />
              </a>
            </Link>
          ))
        )}
      </div>
      {!isLoading && !images[0] && (
        <h1 className="flex flex-col justify-center items-center w-full">
          <EmojiSadIcon className="w-1/5 text-blue-400" />
          <span className="text-gray-500 text-3xl text-center">
            Ничего не найдено
          </span>
        </h1>
      )}
      {scrollBtn && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex justify-center fixed w-full bottom-0 right-0 sm:w-auto sm:bottom-4 sm:right-4 bg-blue-400 py-2 sm:p-4 scroll-top sm:rounded-xl cursor-pointer"
        >
          <ChevronDoubleUpIcon className="h-5 w-5 text-white" />
        </div>
      )}
    </>
  );
}
