import { Metadata } from "next";

export const metadata:Metadata = {
  title: "ページが見つかりませんでした | KitsuneProgrammer"
}

export default function Page() {
  return (
    <div>
      <h1>ページが見つかりませんでした</h1>
      <p>URLが間違っているか、不具合が生じている可能性があります。</p>
    </div>
  );
}