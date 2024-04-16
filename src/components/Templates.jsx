import Board from "./Board";
import Search from "./Search";

const Templates = () => {
  return (
    <div className="template">
      <header className="flex-start">
        <img src="/images/icons/template.svg" alt="Template Icon" />
        <h3 className="heading-secondary">My templates</h3>
      </header>
      <Search />
      <Board />
    </div>
  );
};

export default Templates;
