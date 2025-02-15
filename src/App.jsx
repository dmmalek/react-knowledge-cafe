import Blogs from "./component/Blogs.jsx/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
import Header from "./component/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
}

export default App;
