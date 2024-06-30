import { Metadata } from "next";
import { Blog, Tag } from "@/app/lib/blog";
import Link from "next/link";
import hljs from "highlight.js";
import dayjs from "dayjs";
import parse from "html-react-parser";
import cheerio  from "cheerio";
import { getDetail, getList } from "../../lib/client";
import { website } from "@/app/lib/constant";
import "highlight.js/styles/github-dark.css"

export async function generateMetadata({params: { id },}: {params: { id: string };}): Promise<Metadata> {
	const post: Blog = (await getDetail(id)).detailData as Blog;
	return {
	  title: post.title + website.title,
	  description: website.description
	}
  }

export async function generateStaticParams() {
 const contents : Blog[] = (await getList()).contents as Blog[];
 const paths = contents.map((post) => ({
    id: post.id,
  }))

 return [...paths]
}

export default async function StaticDetailPage({params: { id },}: { params: { id: string };}) {
 const post: Blog = (await getDetail(id)).detailData as Blog;
 const body = cheerio.load(post.content, cheerio._options, false)
 body('pre code').each((_, elm) => {
   const result = hljs.highlightAuto(body(elm).text())
   body(elm).html(result.value)
   body(elm).addClass('hljs')
 })
 post.content = body.html()
 const tags : Tag = post.category as Tag;

 return (
  <>
	<div className="heading">
   		<h1>{post.title}</h1>
   		<p>作成日：{dayjs(post.createdAt).format("YYYY/MM/DD")}</p>
   		<p>最終更新：{dayjs(post.updatedAt).format("YYYY/MM/DD")}</p>
		<ul className="flexbox">
        <li className="tagList"><Link className="tag" href={`/category/${tags.id}`}>#{tags.name}</Link></li>
      	</ul>
   	</div>
   	<div className="contentBody">{parse(post.content)}</div>
  </>
 );
}