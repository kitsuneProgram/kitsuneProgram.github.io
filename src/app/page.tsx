import { Metadata } from "next";
import { website } from "./lib/constant";

export const metadata: Metadata = {
  title: "ホーム" + website.title,
  description: website.description,
};

export default function Home() {
  return (
    <>
      
    </>
  );
}