import React from "react";
import style from "./tasks.module.css";

export const Tasks = ({ count, Clearlist }) => {
 

  return (
    <>
      <div className={style.main_block}>
        <div className={style.block}>
          <p className={style.note}>Notes added: {count}</p>
        </div>
        <button className={style.btn} onClick={Clearlist}>
          Clear List
        </button>
      </div>
    </>
  );
};
