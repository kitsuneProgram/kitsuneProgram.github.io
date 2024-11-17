import Image from "next/image";
import logo from "../images/x.png"
import Link from "next/link";
import { Metadata } from "next";

import banner from "../images/banner.png"

import nakasyou from "../images/links/nakasyou-icon.png"
import hakureiWin from "../images/links/hakureiWin.ico"

import akku from "../images/links/akku-icon.png"
import nishiOwO from "../images/links/nishiboats.png"

export const metadata:Metadata = {
  title: "リンク | KitsuneProgrammer"
}

export default function Links() {
    return (
      <>
        <h1>開発者の狐。のリンク</h1>

        <Link href="https://x.com/kitsune_program" className="flex">
          <div className="flexbox">
            <div className="space_left"/>
            <Image src={logo.src} width={30} height={30} className="shortcut" alt=""/>
            <div className="space_right"/>
          </div>
          <h2>KitsuneProgrammer / 開発者の狐。</h2>
        </Link>

        <hr/>

        <h1>相互リンク</h1>

        <p>相互リンクについて用がある方はXのDMで連絡してください。<br/>
        僕から相互リンクを頼むこともあります。</p>

        <Link href="https://nakasyou.github.io" className="flex">
          <div className="flexbox">
            <div className="space_left"/>
            <Image src={nakasyou.src} width={50} height={50} className="mutual-link" alt=""/>
            <div className="space_right"/>
          </div>
          <h2>nakasyou’s website / nakasyou</h2>
        </Link>

        <Link href="https://hakurei.win" className="flex">
          <div className="flexbox">
            <div className="space_left"/>
            <Image src={hakureiWin.src} width={50} height={50} className="mutual-link" alt=""/>
            <div className="space_right"/>
          </div>
          <h2>博麗神社の物置部屋 / Charlie Root</h2>
        </Link>

        <hr/>

        <h1>一方リンク</h1>

        <Link href="https://akku1139.github.io" className="flex">
          <div className="flexbox">
            <div className="space_left"/>
            <Image src={akku.src} width={50} height={50} className="mutual-link" alt=""/>
            <div className="space_right"/>
          </div>
          <h2>akku’s website / akku</h2>
        </Link>

        <Link href="http://nishi.boats" className="flex">
          <div className="flexbox">
            <div className="space_left"/>
            <Image src={nishiOwO.src} width={150} height={50} className="mutual-link" alt=""/>
            <div className="space_right"/>
          </div>
          <h2>nishi.boats / nishiOwO</h2>
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