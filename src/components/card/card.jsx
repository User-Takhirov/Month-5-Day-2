import React, { useState } from "react";
import style from "./card.module.css";
import trash from "../../img/trash.svg";
import edit from "../../img/edit.svg";

export const Card = ({ name, setData, id, setCount, count }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(name);

  const deleteItem = () => {
    setData((pState) => pState.filter((item) => item.id !== id));
    setCount(count - 1);
  };

  const handleInputChange = (e) => {
    setEditInput(e.target.value);
  };

  const editItem = () => {
    if (isEditing) {
      setData((pState) =>
        pState.map((item) =>
          item.id === id ? { ...item, userName: editInput } : item
        )
      );
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={style.block}>
      {isEditing ? (
        <input
          className={style.title}
          onChange={handleInputChange}
          value={editInput}
          type="text"
        />
      ) : (
        <h1 className={style.title1}>{name}</h1>
      )}

      <div className={style.btn_block}>
        <a href="#" onClick={editItem}>
          <img className={style.trash} src={edit} alt="#" />
        </a>
        <a href="#" onClick={deleteItem}>
          <img className={style.trash} src={trash} alt="#" />
        </a>
      </div>
    </div>
  );
};
