import Board from "./Board";
import Search from "./Search";

const Templates = () => {
  return (
    <div className="template">
      <header className="flex-start heading-secondary">
        <img src="/images/icons/template.svg" alt="Template Icon" />
        <h3 className="">My templates</h3>
      </header>
      <Search />
      <Board />
    </div>
  );
};

export default Templates;
