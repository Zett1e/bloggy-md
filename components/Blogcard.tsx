import { Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "../public/images/avatar.jpg";
import cover from "../public/images/Wallpaper2.jpg";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const Blogcard = ({ moreLike }: { moreLike: boolean }) => {
  return (
    <div>
      <Paper elevation={1} className="p-3 space-y-3">
        <div className={moreLike ? "hidden" : "flex items-center space-x-2"}>
          <div className="flex items-center space-x-1 ">
            <Image className="w-10 rounded-full" src={avatar} alt="avatar" />
            <h5 className="font-semibold">Thomas</h5>
          </div>
          <span className="opacity-70 font-medium">Dec 8, 2022</span>
        </div>
        <div className= "flex justify-between">
          <div className="flex-1 md:w-[70%] flex flex-col justify-between">
            <div className="space-y-2">
              <h1 className="text-lg md:text-xl font-semibold">
                Black Desert: New Class Maegu Released
              </h1>
              <p className="hidden md:block w-[90%] text-ellipsis overflow-hidden whitespace-nowrap ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                officia sit voluptatibus, impedit laborum distinctio debitis
                repellendus ad fuga quae atque praesentium porro illum
                doloremque, veniam aut ex vitae nulla?
              </p>
            </div>
            <div className="flex items-center gap-10">
              <p className="bg-gray-300 rounded-xl px-3 inline-block">Game</p>
              <BookmarkIcon className="w-5 h-6" />
            </div>
          </div>
          <div className="md:w-[25%] w-24 h-24 md:h-auto rounded-sm overflow-hidden">
            <Image
              src={cover}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Blogcard;
