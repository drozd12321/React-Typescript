import React, { useState } from "react";

const Sort = () => {
  const [sort, setSort] = useState("Все");
  return (
    <div>
      <label htmlFor="sort"></label>
      <select name="sort" id="sort" value={sort}></select>
    </div>
  );
};

export default Sort;
