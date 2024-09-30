import React from "react";
import style from "./tasks.module.css";

export const Tasks = ({ count }) => {
  const Delall = () => {
    const data = e.target;
    console.log(data);
  };
  return (
    <>
      <div className={style.main_block}>
        <div className={style.block}>
          <p className={style.note}>Notes added: {count}</p>
        </div>
        <button className={style.btn} onClick={Delall}>
          Clear List
        </button>
      </div>
    </>
  );
};
