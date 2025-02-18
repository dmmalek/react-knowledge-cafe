import PropTypes from "prop-types";
import BookmarkList from "./BookmarkList";

const Bookmark = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3">
      <div className="bg-[#6047EC1A] m-4">
        <h1 className="text-2xl text-[#6047EC] text-center">
          Spend Time on Read : {readingTime}
        </h1>
      </div>
      <div className="text-center bg-slate-200 m-4 py-4">
        <h1>BookMarked list : {bookmarks.length}</h1>
        {bookmarks.map((bookmarklist) => (
          <BookmarkList
            key={bookmarklist.id}
            bookmarklist={bookmarklist}
            readingTime={readingTime}
          ></BookmarkList>
        ))}
      </div>
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmark;
