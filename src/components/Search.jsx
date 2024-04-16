import SearchElement from "./SearchElement";

const Search = () => {
  return (
    <div className="template-item">
      <header className="flex-start heading-secondary">
        <img src="/images/icons/search.svg" alt="Search Icon" />
        <h3 className="">Serch</h3>
      </header>
      <ul>
        <SearchElement type={"current"} text={"Software Engineer"} />
        <SearchElement type={"current"} text={"Computer hardware engineer"} />
        <SearchElement type={"current"} text={"Network Engineer"} />
        <SearchElement type={"current"} text={"Technical Support"} />
        <SearchElement type={"current"} text={"Network administrator"} />
        <SearchElement type={"current"} text={"Management"} />
        <SearchElement type={"current"} text={"Data analysis"} />
        <SearchElement type={"current"} text={"Computer technician"} />
        <SearchElement type={"past"} text={"Past search 1"} />
        <SearchElement type={"past"} text={"Past search 2"} />
        <SearchElement type={"past"} text={"Computers and information..."} />
        <SearchElement type={"past"} text={"Database Administrator"} />
        <SearchElement type={"past"} text={"Computer security"} />
        <SearchElement type={"past"} text={"Computer Systems Analyst"} />
      </ul>
    </div>
  );
};

export default Search;
