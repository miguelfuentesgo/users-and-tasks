import React, { ReactNode } from 'react'
import SideBar from "@/components/Sidebar/Sidebar"
import Header from "@/components/Header/Header"

interface DefaultLayoutProps {
    children: ReactNode
  }
export default function DefaultLayout({ children }:DefaultLayoutProps) {


    return (
        <div>
            <SideBar/>
            <Header />
            <main className="content">
                {children}
            </main>
        </div>
    )
}