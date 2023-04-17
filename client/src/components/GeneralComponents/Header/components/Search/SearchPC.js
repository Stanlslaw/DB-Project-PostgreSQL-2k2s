import "./SearchPC.scss";

export default function Search(props) {
  return (
    <div className="SearchContainer">
      <form className="SearchForm">
        <input
          type="text"
          placeholder="Поиск"
          className="SearchFormInput"
          autoFocus
        />
      </form>
    </div>
  );
}
