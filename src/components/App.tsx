import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Button from "./Button";
import Card from "./Card";
import Loading from "./Loading";
import "../styles/index.css";

function App() {
  const { data, increment, decrement } = useContext(AppContext);

  if (!data?.length) {
    return <Loading />;
  }

  return (
    <div className="App">
      <h1 className="title">Top 12 users</h1>
      <div className="cards">
        {data?.map((company) => {
          return <Card key={company.id} data={company} />;
        })}
      </div>
      <div className="pagination">
        <Button label="Previous" func={decrement} />
        <Button label="Next" func={increment} />
      </div>
    </div>
  );
}

export default App;
