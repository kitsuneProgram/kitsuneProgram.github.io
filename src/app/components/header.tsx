import Image from "next/image"
import image from "../images/header.png"

import style from "../styles/header.module.css"

export default function Header() {
    return(
        <>
            <header>
                <Image src={image.src} width={1000} height={200} alt=""/>
                <div className={style.flexbox}>
                    <div className={style.header_button}>ホーム</div>
                    <div className={style.header_button}>記事一覧</div>
                    <div className={style.header_button}>はじめての方へ</div>
                    <div className={style.header_button}>プログラム</div>
                </div>
            </header>
        </>
    )
}