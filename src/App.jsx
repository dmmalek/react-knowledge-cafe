import { useState } from "react";
import Blogs from "./component/Blogs.jsx/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time);
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
