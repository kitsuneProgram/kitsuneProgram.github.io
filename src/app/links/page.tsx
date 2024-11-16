import Image from "next/image";
import logo from "../images/x.png"
import Link from "next/link";
import { Metadata } from "next";

import banner from "../images/banner.png"

import nakasyou from "../images/links/nakasyou-icon.png"
import akku from "../images/links/akku-icon.png"
import hakureiWin from "../images/links/hakureiWin.ico"

export const metadata:Metadata = {
  title: "リンク | KitsuneProgrammer"
}

export default function Links() {
    return (
      <>
        <h1>開発者の狐。のリンク</h1>

        <Link href="https://x.com/kitsune_program" className="flex">
          <Image src={logo.src} width={30} height={30} className="shortcut" alt=""/>
          <h2>KitsuneProgrammer / 開発者の狐。</h2>
        </Link>

        <hr/>

        <h1>相互リンク</h1>

        <p>相互リンクについて用がある方はXのDMで連絡してください。<br/>
        僕から相互リンクを頼むこともあります。</p>

        <Link href="https://nakasyou.github.io" className="flex">
          <Image src={nakasyou.src} width={50} height={50} className="mutual-link" alt=""/>
          <h2>nakasyou’s website / nakasyou</h2>
        </Link>

        <Link href="https://akku1139.github.io" className="flex">
          <Image src={akku.src} width={50} height={50} className="mutual-link" alt=""/>
          <h2>akku’s website / akku</h2>
        </Link>

        <Link href="https://hakurei.win/" className="flex">
          <Image src={hakureiWin.src} width={50} height={50} className="mutual-link" alt=""/>
          <h2>博麗神社の物置部屋 / Charlie Root</h2>
        </Link>

        <div className="banner">
          <a href="https://kitsuneprogram.github.io"><img src={banner.src} alt=""/></a>
          <h2>このサイトのバナー</h2>
        </div>

        <code>
          
        </code>
      </>
    );
  }