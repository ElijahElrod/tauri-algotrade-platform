import Link from "next/link"
import { motion } from 'framer-motion'
import { useState } from "react"
import { useRouter } from "next/router"

const navItems = [
    {
        path: "/",
        name: "Dashboard",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
      
    },
    {
        path: "/trades",
        name: "Trade Log",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
      
    },
    {
        path: "/settings",
        name: "Settings",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
      </svg>
      
    },
   
    
]

export default function Sidebar() {

    const pathName = useRouter().pathname;
    const [hoverPath, setHoverPath] = useState(pathName);


    return (
        <div className=" min-h-screen max-h-screen border border-stone-800/90 p-[0.4rem]  rounded-lg sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
            <nav className="flex flex-col  gap-2 relative justify-start z-[100]  rounded-lg">
                <h1 className="text-zinc-100 text-3xl antialiased italic">Aether</h1>
                {navItems.map((item, _) => {
                    const isActive = item.path === pathName;

                    return (
                        <Link
                            key={item.path}
                            className={`flex flex-row space-x-2 items-center justify-center px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-400"
                                }`}
                            data-active={isActive}
                            href={item.path}
                            onMouseOver={() => setHoverPath(item.path)}
                            onMouseLeave={() => setHoverPath(pathName)}
                        >

                            <span>{item.svg}</span>
                            <span > {item.name}</span>
                            {item.path === hoverPath && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                                    layoutId="navbar"
                                    aria-hidden="true"
                                    style={{
                                        width: "100%",
                                    }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.1,
                                        stiffness: 130,
                                        damping: 9,
                                        duration: 0.3,
                                    }}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}