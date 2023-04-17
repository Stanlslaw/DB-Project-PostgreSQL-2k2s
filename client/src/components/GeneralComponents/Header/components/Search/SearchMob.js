import "./SearchMob.scss";

export default function SearchMob(props) {
  return (
    <div className="SearchContainerMob">
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
