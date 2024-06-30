import Header from "src/app/components/header";
import "./globals.css";

import nextConfig from "../../../../Desktop/website/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`}/>
      </head>
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}