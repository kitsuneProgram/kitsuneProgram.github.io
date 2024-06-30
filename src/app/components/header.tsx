import nextConfig from "../../../../../Desktop/website/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

import Image from "next/image";
import Link from "next/link";
import style from "src/app/styles/header.module.css"

export default function Header() {
    return (
      <header className={style.header}>
        <Image width={920} height={240} src={`${BASE_PATH}/home.png`} alt=""/>
        <div className={style.flexbox}>
          <Link href="/" className={style.button}>ホーム</Link>
          <Link href="/blogs" className={style.button}>記事を見る</Link>
          <Link href="/welcome" className={style.button}>このサイトについて</Link>
          <Link href="/links" className={style.button}>他リンク</Link>
        </div>
      </header>
    );
}