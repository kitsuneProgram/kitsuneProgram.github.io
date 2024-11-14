import parse from "html-react-parser"
import { getNews } from "./api/client";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "ホーム | KitsuneProgrammer"
}

export default async function Home() {

  const news = (await getNews()).contents;
  return (
    <>
      {parse(news[0].news)}
    </>
  );
}