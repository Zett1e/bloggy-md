import React, { useEffect } from "react";
import Blogcard from "./Blogcard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { collection,getDocs,doc, query, where } from "firebase/firestore";
import { db } from "../firebase";



const Blogs = () => {
  // const smallMQuery = useMediaQuery("(max-width: 767px)");

  const getBlogs= async () => {
    // const querySnap = await getDocs(collection(db,'posts'))

    //  const postDoc = querySnap.docs.map(doc=> doc.id)

    //   console.log(postDoc);
      
    const postsCollection = collection(db, "posts");
    const querySnapshot = await getDocs(query(postsCollection, where("author", "==", "iDewZjrJoI1fPRcV54sl")));
    
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    
  }

  useEffect(()=>{
    getBlogs()
  },[])

  return (
    <div className="md:flex py-5 gap-10">
      <div className="md:w-[70%] ">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          className="text-center my-5 border-b-[1px] !pb-2 md:!hidden"
        >
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">Game</p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block w-full">
              Technology
            </p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">Film</p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">Science</p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">Politic</p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">
              Bussiness
            </p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">
              Animation
            </p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">
              Bussiness
            </p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">
              Animation
            </p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">
              Bussiness
            </p>
          </SwiperSlide>
          <SwiperSlide className="!w-min">
            <p className="bg-gray-300 rounded-xl px-3 inline-block">
              Animation
            </p>
          </SwiperSlide>
        </Swiper>
        <div className="space-y-5">
          <Link href={`/blogs/slug`}>
          <Blogcard moreLike={false}/>
          </Link>
          <Blogcard moreLike={false}/>
          <Blogcard moreLike={false} />
          <Blogcard moreLike={false}/>
          <Blogcard moreLike={false}/>
        </div>
      </div>
      <div className="mt-10 gap-5 flex-wrap h-min hidden md:flex">
        <p className="bg-gray-300 rounded-xl px-3 ">Game</p>
        <p className="bg-gray-300 rounded-xl px-3 ">Technology</p>
        <p className="bg-gray-300 rounded-xl px-3 ">Bussiness</p>
        <p className="bg-gray-300 rounded-xl px-3 ">Animation</p>
        <p className="bg-gray-300 rounded-xl px-3 ">Politic</p>
        <p className="bg-gray-300 rounded-xl px-3 ">Science</p>
        <p className="bg-gray-300 rounded-xl px-3 ">Film</p>
        <p className="bg-gray-300 rounded-xl px-3 ">Sport</p>
        <p className="bg-gray-300 rounded-xl px-3 ">Social</p>
      </div>
    </div>
  );
};

export default Blogs;
