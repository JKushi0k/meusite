'use client'

import { title } from "process";
import { GlobalStyle } from "@/styles/global";
import Head from "next/head";
import StyledComponentsRegistry from "@/lib/registry";


import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/minhalogo.png" />
        <title>Site Kushilin</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

