import Card from "../components/card";
import Search from "../components/search";
import DummyCards from "../components/dummyCards";
import Alert from "../components/alert";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ViewGridIcon,
  EmojiSadIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/outline";
import { useEffect, useState, useContext } from "react";
import Nprogress from "nprogress";
import smoothscroll from "smoothscroll-polyfill";
import { Context } from "./_app";
import ThemeSwitch from "../components/themeSwitch";

export default function index() {
  const dummy = new Array(20).fill(0);
  const [{ page, terms, images, search, scroll }, setContext] = useContext(
    Context
  );
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(25);
  const [scrollBtn, setScrollBtn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function updatePage(query) {
    setContext((prev) => ({ ...prev, page: query }));
  }
  function updateTerms(query) {
    setContext((prev) => ({ ...prev, terms: query }));
  }
  function updateImages(query) {
    setContext((prev) => ({ ...prev, images: query }));
  }
  function updateSearch(query) {
    setContext((prev) => ({ ...prev, search: query }));
  }
  function updateScroll() {
    if (window.pageYOffset !== 0) {
      setContext((prev) => ({ ...prev, scroll: window.pageYOffset }));
    }
  }

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    if (isLoading) {
      Nprogress.start();
    } else {
      Nprogress.done();
      window.scroll(0, scroll);
    }
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  });

  useEffect(() => {
    scroll > 250 ? setScrollBtn(true) : setScrollBtn(false);
    window.innerHeight + scroll >= document.body.offsetHeight &&
      page < total &&
      updatePage(page + 1);
  }, [scroll]);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=20990566-a736427b048592d450fe30b92&q=${terms}&image_type=photo&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        updateImages(images.concat(data.hits));
        setIsLoading(false);
        setTotal(Math.ceil(data.totalHits / 20));
      })
      .catch((error) => console.log(error));
  }, [terms, page]);
  return (
    <>
      <Head>
        <title>Caffeine gallery</title>
      </Head>

      <ViewGridIcon className="w-16 h-16 text-blue-400 dark:text-blue-600 relative my-6 mx-auto sm:m-12 " />
      <ThemeSwitch />
      <Search
        search={search}
        updateSearch={updateSearch}
        Update={(text) => {
          if (text != terms) {
            setIsLoading(true);
            updateImages([]);
            updateTerms(text);
            updatePage(1);
          } else if (!showAlert) {
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        }}
      />
      <AnimatePresence exitBeforeEnter>
        {showAlert && <Alert text="Запрос уже выполнен" />}
      </AnimatePresence>
      <div className="p-8 sm:p-4 sm:pb-8 mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {isLoading ? (
          <DummyCards array={dummy} />
        ) : (
          images.map((obj, index) => (
            <Link href={`/image/${obj.id}`} key={index + obj.user + obj.id}>
              <a className="w-auto shadow-lg card flex flex-col dark:bg-gray-800">
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
      <AnimatePresence exitBeforeEnter>
        {scrollBtn && (
          <motion.div
            initial={{ y: 70 }}
            animate={{ y: 0 }}
            exit={{ y: 70 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex justify-center fixed w-full bottom-0 right-0 sm:w-auto sm:bottom-4 sm:right-4 bg-blue-400 py-2 sm:p-4 scroll-top sm:rounded-xl cursor-pointer dark:bg-blue-600"
          >
            <ChevronDoubleUpIcon className="h-5 w-5 text-gray-50" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
