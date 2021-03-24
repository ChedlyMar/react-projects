import "./App.css";
import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <List people={people} />
        <button
          onClick={() => (people.length ? setPeople([]) : setPeople(data))}
        >
          {people.length ? "Hide people" : "Show people"}
        </button>
      </section>
    </main>
  );
}

export default App;
