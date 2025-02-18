import PropTypes from "prop-types";

const BookmarkList = ({ bookmarklist }) => {
  const { title } = bookmarklist;

  return (
    <div className="m-1 rounded-md bg-white border-2">
      <h3 className="text-xl p-1">{title}</h3>
    </div>
  );
};
BookmarkList.propTypes = {
  bookmarklist: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default BookmarkList;
