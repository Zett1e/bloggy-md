import Image from "next/image";
import React from "react";
import avatar from "../../public/images/avatar.jpg";
import poster from "../../public/images/Wallpaper2.jpg";
import {
  BookmarkIcon,
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Blogcard from "../../components/Blogcard";

const Blog = () => {
  return (
    <div className="p-5">
      <div className="space-y-5">
        <div className="flex items-center gap-5">
          <div className="w-14 rounded-full overflow-hidden">
            <Image src={avatar} alt="avatar" />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <h3 className="text-lg font-semibold">Thomas</h3>
                <p className="bg-green-500 px-3 rounded-xl">Follow</p>
              </div>
              <div>
                <BookmarkIcon className="w-5 h-6" />
              </div>
            </div>
            <div>
              <p>Sep 19,2022</p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl font-bold">
            Black Desert: New Class Maegu Released
          </h1>
          <div className="space-x-3">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">Game</p>
            <p className="bg-gray-300 rounded-xl px-3 inline-block">Esport</p>
            <p className="bg-gray-300 rounded-xl px-3 inline-block">MMORPG</p>
          </div>
          <div className="rounded-md overflow-hidden">
            <Image src={poster} alt="poster" />
          </div>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              quasi qui, sapiente, culpa odio corrupti dolore est ullam minus
              corporis reiciendis nesciunt ipsam eaque aspernatur aut libero
              voluptatum. Est, ipsa. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos quasi qui, sapiente, culpa odio corrupti
              dolore est ullam minus corporis reiciendis nesciunt ipsam eaque
              aspernatur aut libero voluptatum. Est, ipsa. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quos quasi qui, sapiente, culpa
              odio corrupti dolore est ullam minus corporis reiciendis nesciunt
              ipsam eaque aspernatur aut libero voluptatum. Est, ipsa. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quos quasi qui,
              sapiente, culpa odio corrupti dolore est ullam minus corporis
              reiciendis nesciunt ipsam eaque aspernatur aut libero voluptatum.
              Est, ipsa.
            </p>
          </article>
          <div className="flex justify-between">
            <div className="flex gap-10">
              <div className="flex items-center gap-2">
                <HandThumbUpIcon className="w-5" />
                <p>1k</p>
              </div>
              <div className="flex items-center gap-2">
                <ChatBubbleLeftIcon className="w-5" />
                <p>28</p>
              </div>
            </div>
            <div className="mr-5">
              <ShareIcon className="w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-5">
        <h2 className="text-lg font-semibold">More Like This</h2>
        <div className="space-y-5">
            <Blogcard moreLike={true}/>
            <Blogcard moreLike={true}/>
            <Blogcard moreLike={true}/>
            <Blogcard moreLike={true}/>
            <Blogcard moreLike={true}/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
