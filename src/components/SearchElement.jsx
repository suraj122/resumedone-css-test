const SearchElement = ({ type, text }) => {
  const currentSearchIcon = "/images/icons/star.png";
  const pastSearchIcon = "/images/icons/clock.svg";
  return (
    <li className="flex-start search-element">
      {}
      <img
        src={type === "current" ? currentSearchIcon : pastSearchIcon}
        alt="Start Icon"
      />
      <strong>{text}</strong>
    </li>
  );
};

export default SearchElement;
