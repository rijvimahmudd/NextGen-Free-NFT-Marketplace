import Button from "../Button";
import { Card as BlogCard } from "./BlogCard";

const Blog = () => {
  return (
    <div className="text-white bg-primary min-h-screen px-20 flex flex-col justify-center gap-16">
        <div className="w-full flex justify-between items-center">
            <h1 className="text-5xl font-extrabold">Our Latest Blog</h1>
            <Button
                variant="fill"
                label={"Read Our Blogs"}
                className={"py-2 px-5"}
            />
        </div>
        <section className="flex justify-between flex-wrap">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </section>
    </div>
  )
}

export default Blog;