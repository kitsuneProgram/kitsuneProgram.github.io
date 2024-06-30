import { Blog, Tag } from "@/app/lib/blog";
import { getTags } from "@/app/lib/client";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { website } from "@/app/lib/constant";
import { getList, getTagDetail } from "@/app/lib/client";

export async function generateMetadata({params: { category },}: {params: { category: string };}): Promise<Metadata> {
	const post = (await getTagDetail(category)).tag.name;
	return {
	  title: post + website.title,
	  description: website.description
	}
  }

export async function generateStaticParams() {
	const contents : Tag[] = (await getTags()).contents;
 	const paths = contents.map((post) => ({
    	category: post.id,
  	}))

 return [...paths]
}

export default async function CategoryArticleLists({params: { category },}: {params: { category: string };}) {

	const category_ = await getTagDetail(category);
	const post : Blog[] = (await getList()).contents as Blog[];

	return (
		<div>
			<title>{category_.tag.name + website.title}</title>
            <meta name="description" content={website.description}/> 
			<h1>{category_.tag.name}</h1>
			<ul className="flexbox">
				{post.map((post) => (
				<li className="tagList" key={post.id}>
					<Link className="tag" href={`/blogs/${post.id}`}>
						{post.title}
					</Link>
				</li>))}
			</ul>
		</div>
	);
}