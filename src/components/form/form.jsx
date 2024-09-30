import React from "react";
import style from "./form.module.css";

export const Form = ({ setData }) => {
  const [inputValue, setInputValue] = React.useState("");
  const submit = (e) => {
    e.preventDefault();

    setData((pState) => {
      return [ { userName: inputValue, id: Date.now() }, ...pState];
    });

    setInputValue("");
  };

  return (
    <form onSubmit={submit} className={style.form}>
      <input 
      className={style.input}
        onChange={(e) => setInputValue(e.target.value)}
        name="userName"
        type="text"
        value={inputValue}
        placeholder="Add Note"
      />
      <button type="submit">send</button>
    </form>
  );
};
