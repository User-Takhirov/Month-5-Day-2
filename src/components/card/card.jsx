// import React, { useState } from "react";
// import style from "./card.module.css";

// export const Card = ({ name, setData, id }) => {
//   const [editInput, setEditInput] = useState(name);
//   const deleteItem = () => {
//     setData((pState) => pState.filter((item) => item.id !== id));
//   };

//   const handleInputChange = (e) => {
//     setEditInput(e.target.value);
//   };

//   console.log(editInput);

//   const editItem = () => {
//     if (editInput) {
//       setData((pState) =>
//         pState.map((item) =>
//           item.id === id ? { ...item, userName: editInput } : {name}
//           // item.id === id ? (
//           //   <input value={editInput} onChange={handleInputChange} />
//           // ) : (
//           //   <h1>{name}</h1>
//           // )
//         )
//       );
//     }
//   };

//   return (
//     <>
//       <div className={style.block}>
//         {/* editid == id ? <input value={name} /> : {name} */}
//         {/* <input value={name} className={style.title} /> */}

//         <input onChange={handleInputChange} value={editInput} type="text" />
//         {/* <h1 className={style.title}>{name}</h1> */}

//         <div>
//           <button onClick={deleteItem}>delete</button>
//           <button onClick={editItem}>edit</button>
//         </div>
//       </div>
//     </>
//   );
// };

//////
import React, { useState } from "react";
import style from "./card.module.css";
import trash from "../../img/trash.svg";
import edit from "../../img/edit.svg";


export const Card = ({ name, setData, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(name);

  const deleteItem = () => {
    setData((pState) => pState.filter((item) => item.id !== id));
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
        <a href="#" onClick={editItem}><img className={style.trash} src={edit} alt="#" /></a>
        <a href="#" onClick={deleteItem}>
          <img className={style.trash} src={trash} alt="#" />
        </a>
      </div>
    </div>
  );
};



////

// {isEditing ? "Save" : "Edit"}

///

// import React, { useState } from 'react';
// import style from "./card.module.css";

// export const Card = ({ name, setData, id }) => {
//     const [isEditing, setIsEditing] = useState(false);  // Track whether in edit mode
//     const [editInput, setEditInput] = useState(name);   // Track the input value

//     // Handle deleting an item
//     const deleteItem = () => {
//         setData((pState) => pState.filter((item) => item.id !== id));
//     };

//     // Handle input change
//     const handleInputChange = (e) => {
//         setEditInput(e.target.value);
//     };

//     // Toggle edit mode and save changes
//     const editItem = () => {
//         if (isEditing) {
//             setData((pState) =>
//                 pState.map((item) =>
//                     item.id === id ? { ...item, userName: editInput } : item
//                 )
//             );
//         }
//         setIsEditing(!isEditing); // Toggle edit mode
//     };

//     return (
//         <div className={style.block}>
//             {isEditing ? (
//                 <input
//                     onChange={handleInputChange}
//                     value={editInput}
//                     type="text"
//                 />
//             ) : (
//                 <h1 className={style.title}>{name}</h1>
//             )}
            
//             <div>
//                 <button onClick={deleteItem}>delete</button>
//                 <button onClick={editItem}>{isEditing ? "Save" : "Edit"}</button>
//             </div>
//         </div>
//     );
// };
