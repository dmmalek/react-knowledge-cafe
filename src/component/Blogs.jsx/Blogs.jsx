import { useEffect, useState } from "react";

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      <h1>Blog</h1>
      <p>Blog Legth :{blog.length}</p>
    </div>
  );
};

export default Blogs;
