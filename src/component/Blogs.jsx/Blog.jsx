import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
      <div>
        <img src={cover} />
      </div>
      <div>
        <div>
          <div>
            <img src={author_img} alt={author} />
          </div>
          <div>
            <p>{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>{reading_time}</p>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {hashtags.map((hashtag, idx) => (
          <a key={idx}>#{hashtag}</a>
        ))}
      </div>
      <div>
        <a href="#">Marks as Read</a>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.array.isRequired,
};
export default Blog;
