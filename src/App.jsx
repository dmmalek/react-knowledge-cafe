import { useState } from "react";
import Blogs from "./component/Blogs.jsx/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <div>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </div>
  );
}

export default App;
