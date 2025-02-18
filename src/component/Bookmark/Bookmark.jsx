import PropTypes from "prop-types";
import BookmarkList from "./BookmarkList";

const Bookmark = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3">
      <h1>Reading Time : {readingTime}</h1>
      <h1>BookMarked list : {bookmarks.length}</h1>
      {bookmarks.map((bookmarklist) => (
        <BookmarkList
          key={bookmarklist.id}
          bookmarklist={bookmarklist}
          readingTime={readingTime}
        ></BookmarkList>
      ))}
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmark;
