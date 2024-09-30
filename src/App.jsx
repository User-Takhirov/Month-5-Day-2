import React from "react";
import { Form } from "./components/form";
import { Card } from "./components/card/card";
import { Tasks } from "./components/tasks";

function App() {
  const [count, setCount] = React.useState(0);
  const [item, setItem] = React.useState([]);
  // const [delall, setdelall] = React.useState([]);
  return (
    <div className="block">
      <h1 className="title">To Do List</h1>
      <Tasks count={count} />
      <div className="input_block">
        {item.map((item) => {
          return (
            <Card
              setCount={setCount}
              count={count}
              key={item.id}
              setData={setItem}
              id={item.id}
              name={item.userName}
            />
          );
        })}
      </div>
      <Form setData={setItem} setCount={setCount} count={count} />
    </div>
  );
}

export default App;
