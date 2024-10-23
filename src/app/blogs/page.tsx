import Link from "next/link";
import { client } from "../api/client";
import { Blog } from "../api/blog";

export default async function Blogs() {

  const blogs:Blog[] = (await client.get({endpoint:"blogs"})).contents;
  console.log(blogs);
  console.log(typeof blogs);

  return (
    <div>
        {blogs.map((blog) => (
          <ul key={blog.contentId}>
            <li>
              <Link href={`/blogs/${blog.contentId}`}>{blog.title}</Link>
            </li>
          </ul>
        ))}
    </div>
  );
}