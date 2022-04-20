import React, { useState, useEffect } from "react";
import EntityTable from "./entityTable";

function EntityTableContainer(props) {
  const fetchURL = props.fetchURL;
  const name = props.name;
  const [entities, setEntities] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //todo why use effect applies two times
  useEffect(() => {
    fetchEntities();
  }, []);

  useEffect(() => {
    entities && entities.length > 0 ? setIsLoaded(true) : setIsLoaded(false);
  }, [entities]);

  const fetchEntities = () => {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(fetchURL, params)
      .then((res) => res.json())
      .then((data) => {
        setEntities(data);
      });
  };
  return (
    <div>
      <div class="row">
        <div class="col text-center">
          <h2> {name}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          {isLoaded ? (
            <EntityTable entities={entities} keys={Object.keys(entities[0])} />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-primary" onClick={fetchEntities}>
            Загрузить таблицу
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntityTableContainer;
