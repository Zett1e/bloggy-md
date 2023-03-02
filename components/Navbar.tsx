import React from 'react'
import avatar from "../public/images/avatar.jpg";
import {
  PencilSquareIcon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center gap-4 md:gap-6">
          <MagnifyingGlassIcon className="w-6 cursor-pointer" />
          <div className="flex items-center gap-x-1 cursor-pointer">
          <PencilSquareIcon className="w-6" />
            <span>Write</span>
          </div>
          <BellIcon className="w-6 cursor-pointer" />
          <Image className="w-10 rounded-full cursor-pointer" src={avatar} alt="avatar" />
        </div>
  )
}

export default Navbar