"use client"

import { website } from "./lib/constant";

export default function NotFound() {
  return (
    <>
      <title>ページが見つかりませんでした | 開発者の狐。</title>
      <meta name="description" content={website.description}/> 
      <h1>404 Not Found</h1>
      <h2>ページが見つかりませんでした</h2>
    </>
  );
}