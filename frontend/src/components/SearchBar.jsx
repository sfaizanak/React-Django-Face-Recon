const SearchBar = () => {
  const deptOpts = [
    "All",
    "Computer Science",
    "Computer Application",
    "Science",
    "Commerce",
    "Arts",
  ];
  return (
    <form
      className="form-inline my-2 my-lg-0 mx-5"
      method="GET"
      // style={{ display: "flex", alignItems: "center" }}
    >
      <input type="hidden" name="collegeName" value="{{collegeName}}" />
      <select name="searchDept" className="form-control m-1" required>
        <option value="">Choose Department</option>
        {deptOpts.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
      <input
        className="form-control mr-sm-2 m-1"
        type="search"
        placeholder="Search by Name"
        aria-label="Search"
        name="searchName"
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0 m-1 h-100"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
