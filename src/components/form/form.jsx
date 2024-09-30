import React, { useState } from "react";
import style from "./form.module.css";

export const Form = ({ setData, setCount, count }) => {
  const [inputValue, setInputValue] = useState("");
  const submit = (e) => {
    e.preventDefault();

    setData((pState) => {
      return [{ userName: inputValue, id: Date.now() }, ...pState];
    });

    setInputValue("");
    setCount(count + 1);
  };

  return (
    <div>
      <form onSubmit={submit} className={style.form}>
        <input
          className={style.input}
          onChange={(e) => setInputValue(e.target.value)}
          name="userName"
          type="text"
          value={inputValue}
          placeholder="Add Note"
        />
        <button className={style.btn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
