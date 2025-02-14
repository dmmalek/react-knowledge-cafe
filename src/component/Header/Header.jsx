import ProfileImage from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="md:flex border-b-2 justify-between items-center mx-4 p-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={ProfileImage} alt="profile-image" />
    </div>
  );
};

export default Header;
