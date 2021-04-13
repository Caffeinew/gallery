import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export default function ThemeSwitch() {
  console.log('mounted switch')
  const [theme, setTheme] = useState(
    useEffect(() => {
      setTheme(document.cookie);
    }, [])
  );

  useEffect(() => {
    console.log('theme cookie change')
    document.cookie = theme;
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="w-48 h-8 flex items-center justify-center absolute inset-0 mx-auto sm:mr-0 sm:right-4 top-28 sm:top-16">
      <SunIcon className="w-8 h-8 text-yellow-500 dark:text-gray-700" />
      <label className="flex w-12 h-6 relative mx-2">
        <input
          type="checkbox"
          className="w-0 h-0 opacity-0 switch"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          defaultChecked={theme == "dark" ? true : false}
        />
        <span className="absolute inset-0 cursor-pointer bg-gray-400 rounded-full slider"></span>
      </label>
      <MoonIcon className="w-8 h-8 text-gray-300 dark:text-yellow-500" />
    </div>
  );
}
