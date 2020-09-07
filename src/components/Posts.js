import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading.......</h2>;
  }
  return (
    <div className="container">
      {/* {console.log(posts)} */}
      <table id="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
