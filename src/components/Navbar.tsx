"use client";
import Link from "next/link";
import Image from "next/image";
import React,{useState} from "react";

const Navbar = () => {
    const[clicked,setclicked]=useState(0);
    const handleclick=(btn: React.SetStateAction<number>)=>{
        setclicked(btn);
        setTimeout(()=>setclicked(0),300);
    };  

    return (
        <div 
            className='fixed top-0 bottom-5 h-186 flex flex-col text-white items-center  p-4 m-5 mb-5 rounded-[15px] gap-5
                        pointer-events-auto' 
            style={{ backgroundColor: '#0B083E' }}
        >
            <div className=" text-2xl font-bold mb-4"><Link href="">Logo</Link></div>

            <Link href="/" className="flex flex-col items-center" onClick={()=>handleclick(1)}>
                <div className={`rounded-full p-2 ${clicked===1?'bg-slate-600':'bg-transparent'}`}><Image src="/Icons/homeicon.png" width={50} height={50} alt="Home" /></div>
                <div>Explore</div>
            </Link>

            <Link href="/contractors" className="flex flex-col items-center p-2 duration-300 " onClick={()=>handleclick(2)}>
                <div className={`rounded-full p-2 ${clicked===2?'bg-slate-600':'bg-transparent'}`}><Image src="/Icons/contractors.png" width={50} height={50} alt="Contractors" /></div>
                <div>Contractors</div>
            </Link>

            <Link href="/projects" className="flex flex-col items-center" onClick={()=>handleclick(3)}>
                <div className={`rounded-full  p-2 ${clicked===3?'bg-slate-600':'bg-transparent'}`}><Image src="/Icons/clipboard.png" width={50} height={50} alt="Projects" /></div>
                <div>Projects</div>
            </Link>

            <Link href="/user" className="flex flex-col items-center" onClick={()=>handleclick(4)}>
                <div className={`rounded-full p-2 ${clicked===4?'bg-slate-600':'bg-transparent'}`}><Image src="/Icons/users.png" width={50} height={50} alt="Users" /></div>
                <div>Users</div>
            </Link>
        </div>
    );
};

export default Navbar;
