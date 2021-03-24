import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <article key={person.id} className="person">
            <Person person={person} />
          </article>
        );
      })}
    </>
  );
};

export default List;
