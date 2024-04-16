import Boardelement from "./BoardElement";

const Board = () => {
  return (
    <div className="template-item">
      <header className="flex-between heading-secondary">
        <div className="flex-start">
          <img src="/images/icons/board.svg" alt="Board Icon" />
          <h3 className="">My Boards</h3>
        </div>
        <img src="/images/icons/add.svg" alt="Plus Icon" />
      </header>
      <ul>
        <Boardelement type={"open"} text={"Software Engineer"} />
        <Boardelement type={"open"} text={"Computer hardware engineer"} />
        <Boardelement type={"open"} text={"Network Engineer"} />
        <Boardelement type={"lock"} text={"Technical Support"} />
        <Boardelement type={"lock"} text={"Network administrator"} />
        <Boardelement type={"lock"} text={"Network administrator"} />
      </ul>
    </div>
  );
};

export default Board;
