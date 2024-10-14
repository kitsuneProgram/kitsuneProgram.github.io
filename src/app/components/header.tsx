import Image from "next/image"
import image from "../images/header.png"

export default function Header() {
    return(
        <>
            <header>
                <Image src={image.src} width={1000} height={200} alt=""/>
            </header>
        </>
    )
}