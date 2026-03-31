const Search = ({ query, onChange }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default Search;