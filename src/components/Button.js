import React from "react";

const Button = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNos = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNos.push(i);
    // console.log(i);
  }
  return (
    <div id="button">
      {pageNos.map((number) => (
        <button key={number} onClick={() => paginate(number)} className="btn">
          {number}
        </button>
      ))}
    </div>
  );
};

export default Button;
