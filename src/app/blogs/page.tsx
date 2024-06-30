//"use client"

import Image from "next/image";

import Link from "next/link";

import { getList, getTags } from "../lib/client";
import { website } from "../lib/constant";
import { Blog, Tag } from "../lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "記事を見る" + website.title,
	description: website.description,
  };

export default async function Blogs() {

	const blogs : Blog[] = (await getList()).contents;
	const tags : Tag[] = (await getTags()).contents;

	return (
		<>
			<h1>最近の記事</h1>
			<ul className="box">
			{blogs.map((article) => (
				<div className="tagList" key={article.id}>
					<Link className="tag" href={`/blogs/${article.id}`}>
						<Image src={article.image.url ?? `/no-image.png`}alt="アイキャッチ"width={200}height={200}/>
						<h2>{article.title}</h2>
					</Link>
				</div>))}
			</ul>
			<h1>タグから検索</h1>
			<ul className="flexbox">
				{tags.map((tag) => (
				<li className="tagList" key={tag.id}>
					<Link className="tag" href={`/category/${tag.id}`}>
						#{tag.name}
					</Link>
				</li>))}
			</ul>
		</>
	);
}