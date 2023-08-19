'use client'
import { ReactNode } from "react";
import Sidebar from "./Sidebar";



type LayoutProps = {
    children: React.ReactNode
}

export default function SidebarLayout({children}: LayoutProps) {
    return (
    <div className="grid grid-cols-6">
        <div className="col-span-1">
            <Sidebar />
        </div>
        <div className="col-span-5">
            {children}
        </div>
    </div>
    );
}