import PropTypes from "prop-types";

const BookmarkList = ({ bookmarklist }) => {
  const { title } = bookmarklist;

  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};
BookmarkList.propTypes = {
  bookmarklist: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default BookmarkList;
