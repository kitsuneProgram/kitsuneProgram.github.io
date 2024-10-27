import Link from "next/link";
import { client } from "../api/client";
import { Blog } from "../api/blog";
import Image from "next/image";
import dayjs from "dayjs";

export default async function Blogs() {

  const blogs:Blog[] = (await client.get({endpoint:"blogs"})).contents;
  console.log(blogs);
  console.log(typeof blogs);

  return (
    <div className="blogs">
        {blogs.map((blog:Blog) => (
          <ul key={blog.contentId}>
            <li className="article">
              <Link href={`/blogs/${blog.contentId}`}>
                <Image src={blog.image.url ?? ""} width={200} height={200} alt=""/>
                  <h2>{blog.title}</h2>
                  <h3>{dayjs(blog.createdAt).format("YYYY/MM/DD")}</h3>
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
}