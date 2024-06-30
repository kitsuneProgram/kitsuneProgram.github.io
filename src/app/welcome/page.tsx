import { Metadata } from "next";
import { website } from "../lib/constant";

export const metadata: Metadata = {
  title: "このサイトについて" + website.title,
  description: website.description,
};

export default function Welcome() {
  return (
    <>
      <h1 className="marker">開発者の狐。とは？</h1>
      <p>Webサイト制作、ゲーム制作をするプログラマーです。<br/>
      できたプログラムとか制作過程とかを載せていくつもりです。</p>
    </>
  );
}