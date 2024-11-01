import { getBlogDetail, getBlogs } from "@/app/api/client"
import { load } from "cheerio";
import parse from "html-react-parser"
import hljs from "highlight.js";
import 'highlight.js/styles/vs2015.css';

export async function generateStaticParams() {
  const blogs = (await getBlogs()).contents;
 
  const paths = blogs.map((post) => {
   return {contentId: post.id};
  });
 
  return [...paths];
 }

export default async function Article({params: { contentId },}: {params: { contentId: string };}) {

  const post = await getBlogDetail(contentId);

  const $ = load(post.content, null, false);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  post.content = $.html();
 
  return (
    <div>
      <h1>{post.title}</h1>
      <hr/>
      <div>{parse(post.content)}</div>
    </div>
  );
 }