import style from "../../../styles/header.module.css"

export default function Header() {
    return(
        <header className={style.header}>
            <h1>KitsuneProgrammer</h1>
            <h2>ゲーム制作やWebサイト制作について書いていきます。</h2>
        </header>
    )
}