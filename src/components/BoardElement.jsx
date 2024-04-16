const Boardelement = ({ type, text }) => {
  const open = "/images/icons/folder.png";
  const lock = "/images/icons/lock.png";
  return (
    <li className="flex-start search-element">
      {}
      <img src={type === "open" ? open : lock} alt="Start Icon" />
      <strong>{text}</strong>
    </li>
  );
};

export default Boardelement;
