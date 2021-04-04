import { EyeIcon, ThumbUpIcon, DownloadIcon } from "@heroicons/react/solid";

export default function card({ data }) {
  const { webformatURL, views, downloads, likes, user, userImageURL } = data;

  return (
    <div className="w-auto shadow-lg card flex flex-col">
      <img src={webformatURL} className="h-64 w-full object-cover" />
      <div className="flex px-8 pt-8 items-center relative">
        <img
          src={
            userImageURL ||
            "https://flaticon.com/svg/vstatic/svg/599/599305.svg?token=exp=1617477733~hmac=103005c08d00f1d2095ca9a7ae1dc269"
          }
          className="shadow w-24 rounded-full object-cover absolute -top-12 right-4 border-4 border-gray-200 bg-gray-100"
        />
        <h1 className=" my-3 text-gray-800 text-2xl ">{user}</h1>
      </div>
      <div className="w-full px-8 pb-8 text-gray-700">
        <span className="flex my-2">
          <EyeIcon className="w-4 mr-2" /> Просмотры: {views}
        </span>
        <span className="flex my-2">
          <DownloadIcon className="w-4 mr-2" /> Загрузки: {downloads}
        </span>
        <span className="flex my-2">
          <ThumbUpIcon className="w-4 mr-2" /> Лайки: {likes}
        </span>
      </div>
    </div>
  );
}
