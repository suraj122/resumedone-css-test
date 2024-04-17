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
        <Boardelement type={"open"} text={"Board 1"} />
        <Boardelement type={"open"} text={"Board 2"} />
        <Boardelement type={"open"} text={"Board 3"} />
        <Boardelement type={"lock"} text={"Board agent 1"} />
        <Boardelement type={"lock"} text={"Board agent 2"} />
        <Boardelement type={"lock"} text={"Board agent 3"} />
      </ul>
    </div>
  );
};

export default Board;
