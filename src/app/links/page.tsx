import { Metadata } from "next";
import { website } from "../lib/constant";

export const metadata: Metadata = {
  title: "他リンク" + website.title,
  description: website.description,
};

export default function Links() {
  return (
    <>
      
    </>
  );
}