export const SortBar = ({sortBy, setSortBy, order, setOrder}) => {
  const handleOrderChange=(e)=>{
    console.log(e.target.value)
  }
  const handleSortChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <section className="sort-bar">
      <label htmlFor="sort_by">Sort by</label>
      <select name="sort_by" id="sort_by" onChange={handleSortChange}>
        <option value="created_at">Date created</option>
        <option value="comment_count">Number of comments</option>
        <option value="votes">Popularity</option>
  
      </select>
      <label htmlFor="order">Order By</label>
      <select name="order" id="order" onChange={handleOrderChange}>
        <option value="DESC">Descending</option>
      <option value="ASC">Ascending</option>
      </select>
    </section>

  );
};
