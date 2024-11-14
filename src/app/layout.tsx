import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Head from "next/head";

export const metadata: Metadata = {
  title: "KitsuneProgrammer",
  description: "開発者の狐。のブログです。",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ja">
      <Head>
      <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}