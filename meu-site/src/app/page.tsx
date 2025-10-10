'use client'

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Lista } from "@/components/lista"
import { Sugestao } from "@/components/sugestoes"

import './globals.css'

export default function Home() {

  return( 
    <>
      <main>
        <Header />
        <Sidebar />
        <div className="flex-1 flex flex-col justify-center items-center pb-[5px] ml-[154px] mt-[90px]">
          <h1 className="pb-[10px]">Seja Bem-vindos</h1>
          <p className="pb-[10px] pl-[10px] text-[32px]">Esse site foi feito para divulgar meus vídeo, shorts e outros conteúdos futuros como jogos, programação etc.</p>
          <hr className="mt-[10px] mb-[10px] w-[80%] mx-auto" />
        </div>
        <div className="flex-1 flex flex-row justify-around items-center ml-[154px] mt-[10px]">
          <Lista />
          <Sugestao />
        </div>
      </main>
    </>
  )
}