interface Props {
  search: string | undefined;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<Props> = ({
  search,
  handleSearchChange,
  onSearchSubmit,
}) => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-grey focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="p-3 bg-white rounded-lg text-black hover:bg-blue-500 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
