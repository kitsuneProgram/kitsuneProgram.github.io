import Link from "next/link";
import { getBlogs } from "../api/client";
import Image from "next/image";
import dayjs from "dayjs";

export default async function Blogs() {

  const blogs = (await getBlogs()).contents;
  console.log(blogs);

  return (
    <div className="blogs">
        {blogs.map((blog) => (
          <ul className="article" key={blog.id}>
            <li>
              <Link href={`/blogs/${blog.id}`}>
                <Image src={blog.image.url ?? ""} width={150} height={150} alt=""/>
                  <h2>{blog.title}</h2>
                  <h3>{dayjs(blog.createdAt).format("YYYY/MM/DD")}</h3>
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
}