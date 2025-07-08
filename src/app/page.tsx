'use client'

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"


import './globals.css'

export default function Home() {

  return( 
    <>
      <main>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div className="flex-1 p-5 ml-[150px]">
            <h1>Seja Bem-vindos</h1>
          </div>
        </div>
      </main>
    </>
  )
}