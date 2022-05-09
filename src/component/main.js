import React from "react";
import EntityTableContainer from "./entityTableContainer";

function Main() {
  return (
    <div>
      <EntityTableContainer
        fetchURL="https://jsonplaceholder.typicode.com/posts"
        name="Posts"
      />
      <EntityTableContainer
        fetchURL="https://jsonplaceholder.typicode.com/todos"
        name="Todos"
      />
      <EntityTableContainer
        fetchURL="https://jsonplaceholder.typicode.com/comments"
        name="Comments"
      />
    </div>
  );
}

export default Main;
