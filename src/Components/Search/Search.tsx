interface Props {
  search: string | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Search: React.FC<Props> = ({ search, handleChange, handleClick }) => {
  return (
    <div>
      <input value={search} onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
