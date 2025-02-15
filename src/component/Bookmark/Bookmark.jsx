import PropTypes from "prop-types";

const Bookmark = ({ bookmarks }) => {
  return (
    <div className="w-1/3">
      <h1>BookMarked list : {bookmarks.length}</h1>
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default Bookmark;
