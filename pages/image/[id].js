import Head from "next/head";
import Link from "next/link";
import {
  EyeIcon,
  ThumbUpIcon,
  DownloadIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";
import {stagger, sliderBottom } from '../../components/animations/default'

export default function Image({ data }) {
  const {
    largeImageURL,
    views,
    downloads,
    likes,
    user,
    userImageURL,
    tags,
  } = data;
  return (
    <>
      <Head>
        <title>Image Showcase | Caffeine Gallery</title>
      </Head>
      <motion.div
        className="absolute m-8 sm:m-16 xl:m-0 xl:inset-16 shadow-xl flex flex-col xl:flex-row items-center justify-center"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <Link href="/">
          <motion.a
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.5 },
            }}
            className="cursor-pointer absolute flex p-2 md:p-3 xl:p-4 bg-white shadow -top-4 xl:top-auto -left-4 xl:-left-8"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </motion.a>
        </Link>
        <img
          src={largeImageURL}
          className="object-cover h-auto xl:h-full w-full xl:w-3/4 largeImg"
        />
        <div className="w-full h-full py-8 px-4 md:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 items-center justify-items-center">
          <motion.div variants={sliderBottom}>
            <img
              src={userImageURL || "/profile.svg"}
              className="-mt-20 sm:-mt-24 md:mt-0 shadow w-24 sm:w-32 md:w-48 rounded-full object-cover border-4 border-gray-200 bg-gray-100 mx-auto"
            />
            <h1 className="my-4 text-gray-800 text-xl sm:text-2xl md:text-3xl text-center">
              {user}
            </h1>
          </motion.div>
          <motion.div
            className="text-gray-700 text-md sm:text-lg md:text-xl xl:mt-4"
            variants={sliderBottom}
          >
            <span className="flex my-2 items-center">
              <EyeIcon className="w-4 h-4 md:h-5 md:w-5 mr-3" /> Просмотры:{" "}
              {views}
            </span>
            <span className="flex my-2 items-center">
              <DownloadIcon className="w-4 h-4 md:h-5 md:w-5 mr-3" /> Загрузки:{" "}
              {downloads}
            </span>
            <span className="flex my-2 items-center">
              <ThumbUpIcon className="w-4 h-4 md:h-5 md:w-5 mr-3" /> Лайки:{" "}
              {likes}
            </span>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center mt-8 w-full select-none"
            variants={sliderBottom}
          >
            {tags.split(",").map((tag, index) => (
              <div className="m-2 py-2 px-4 text-center shadow" key={index}>
                {tag}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const result = await fetch(
    "https://pixabay.com/api/?key=20990566-a736427b048592d450fe30b92&id=" +
      params.id
  );
  const data = await result.json();
  return { props: { data: data.hits[0] } };
}
