export const SortBar = ({sortBy,setSortBy, order,setOrder}) => {
  const handleOrderChange=(e)=>{
   
    setOrder(e.target.value)
  }
  const handleSortChange=(e)=>{
  
    setSortBy(e.target.value)
  }
  return (
    <section className="sort-bar">
      <label htmlFor="sort_by">Sort by</label>
      <select name="sort_by" id="sort_by" onChange={handleSortChange} defaultValue={sortBy}>
        <option value="created_at" >Date created</option>
        <option value="comment_count">Number of comments</option>
        <option value="votes" >Popularity</option>
  
      </select>
      <label htmlFor="order">Order By</label>
      <select name="order" id="order" onChange={handleOrderChange} defaultValue={order}>
        <option value="DESC">Descending</option>
      <option value="ASC">Ascending</option>
      </select>
    </section>

  );
};
