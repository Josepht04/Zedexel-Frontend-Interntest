import React from "react";
import Image from "next/image";
import { Lens } from "@/components/magicui/lens";

const Explore = () => {
  return (
    <>
      <div className="relative flex  max-w-full items-center justify-center overflow-hidden rounded-lg border  px-40 pb-40 pt-8 md:pb-60">
        <div className="pointer-events-none whitespace-pre-wrap  bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Explore
        </div>
        <div className="pointer-events-none absolute inset-0 h-full " />
      </div>

      <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-20'>
          <div><Lens><Image src='/Images/exhibitionstall28.jpg' alt='stall pic1' width={400} height={400}></Image></Lens></div>
          <div><Lens><Image src='/Images/exhibitionstall32.jpg' alt='stall pic2' width={400} height={400}></Image></Lens></div>
          <div><Lens><Image src='/Images/exhibitionstall30.jpeg' alt='' width={400} height={400}></Image></Lens></div>
        </div>
        <div className='flex flex-row gap-20'>
          <div><Lens><Image src='/Images/exhibitionstall29.jpeg' alt='' width={400} height={400}></Image></Lens></div>
          <div><Lens><Image src='/Images/exhibitionstall31.jpeg' alt='stall pic2' width={400} height={400}></Image></Lens></div>
          <div><Lens><Image src='/Images/exhibitionstall33.jpeg' alt='stall pic1' width={400} height={400}></Image></Lens></div>
        </div>
        <div className='flex flex-row gap-20'>
          <div><Lens><Image src='/Images/exhibitionstall30.jpeg' alt='' width={400} height={400}></Image></Lens></div>
          <div><Lens><Image src='/Images/exhibitionstall32.jpg' alt='stall pic2' width={400} height={400}></Image></Lens></div>
          <div><Lens><Image src='/Images/exhibitionstall28.jpg' alt='stall pic1' width={400} height={400}></Image></Lens></div>
        </div>
      </div>
    </>
  );
};

export default Explore;
