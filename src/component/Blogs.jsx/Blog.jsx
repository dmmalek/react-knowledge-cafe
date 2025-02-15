import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <div className="w-full p-2">
        <img className="w-full rounded-lg" src={cover} />
      </div>
      <div className="flex justify-between p-2">
        <div className="flex gap-2 p-2">
          <div className="w-12">
            <img src={author_img} alt={author} />
          </div>
          <div>
            <p>{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p>{reading_time} min reads</p>
          <button className="text-red-700" onClick={() => handleBookmark(blog)}>
            <FaBookmark />
          </button>
        </div>
      </div>
      <div className="p-2">
        <h2 className="font-bold text-4xl">{title}</h2>
      </div>
      <div className="p-2">
        {hashtags.map((hashtag, idx) => (
          <a className="pl-1" key={idx}>
            #{hashtag}
          </a>
        ))}
      </div>
      <div className="p-2">
        <a href="#">Marks as Read</a>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.array.isRequired,
  handleBookmark: PropTypes.func.isRequired,
};
export default Blog;
