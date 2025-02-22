import { useState } from "react";
import Blogs from "./component/Blogs.jsx/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    console.log(blog);
    const isExist = bookmarks.find((b) => b.id === blog.id);
    if (isExist) {
      alert("Already Marked");
    } else {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
  };

  const handleReadingTime = (id, time) => {
    setReadingTime(readingTime + time);
    console.log("id is", id);
    const remaingBookMark = bookmarks.filter((blog) => blog.id !== id);
    setBookmarks(remaingBookMark);
  };
  return (
    <div>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleBookmark={handleBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </div>
    </div>
  );
}

export default App;
