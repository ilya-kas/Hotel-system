import React from "react";

function EntityTable(props) {
  const entities = props.entities;
  const keys = props.keys;
  /* const entities = [
    {
      name: "Pavel",
      surname: "Kost",
      myObj: {
        sign: "111",
        throw: "234",
      },
    },
  ];
  const keys = ["name", "surname", "myObj"];*/
  return (
    <table class="table">
      <thead>
        <tr>
          {keys.map((key) => {
            return <th class="col text-center">{key}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {entities.map((entity) => {
          return (
            <tr>
              {keys.map((key) => {
                return (
                  <td class=" text-center">{JSON.stringify(entity[key])}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EntityTable;
