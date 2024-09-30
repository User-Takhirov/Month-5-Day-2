import React from "react";
import { Form } from "./components/form";
import { Card } from "./components/card/card";

function App() {
  const [item, setItem] = React.useState([]);

  return (
    <div className="block">
      <h1 className="title">To Do List</h1>
      <div className="input_block">
      {item.map((item) => {
        return (
          <Card
          key={item.id}
          setData={setItem}
          id={item.id}
          name={item.userName}
          />
        );
      })}
    </div>
      <Form setData={setItem} />
      </div>
     
  );
}

export default App;
