import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      {blogs.map((blog) => (
        <Blog
          handleBookmark={handleBookmark}
          handleReadingTime={handleReadingTime}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blogs;
