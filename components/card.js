import { EyeIcon, ThumbUpIcon, DownloadIcon } from "@heroicons/react/solid";

export default function card({ data }) {
  const { webformatURL, views, downloads, likes, user, userImageURL } = data;

  return (
    <>
      <img src={webformatURL} className="h-64 w-full object-cover" />
      <div className="flex px-8 pt-8 items-center relative">
        <img
          src={userImageURL || "/profile.svg"}
          className="shadow w-24 h-24 rounded-full object-cover absolute -top-12 right-4 border-4 border-gray-200 dark:border-gray-400 bg-gray-100 dark:bg-gray-700"
        />
        <h1 className=" my-3 text-gray-800 text-2xl dark:text-gray-200">{user}</h1>
      </div>
      <div className="w-full px-8 pb-8 text-gray-700 dark:text-gray-400">
        <span className="flex my-2 items-center">
          <EyeIcon className="w-4 h-4 mr-2" /> Просмотры: {views}
        </span>
        <span className="flex my-2 items-center">
          <DownloadIcon className="w-4 h-4 mr-2" /> Загрузки: {downloads}
        </span>
        <span className="flex my-2 items-center">
          <ThumbUpIcon className="w-4 h-4 mr-2" /> Лайки: {likes}
        </span>
      </div>
    </>
  );
}
