import React, { useRef, useState } from "react";
import "./crud.css";
import { MdAddTask } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
// import { List, containerClasses } from "@mui/material";

function CRUD() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  // console.log(list);
  const [update, setUpdate] = useState();
  const [btn, btnUpdate] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTask = (e) => {
    // e.preventDefault();
    var name = document.getElementById("name").value;
    for (var i = 0; i < list.length; i++) {
      // console.log(list);
      if (list[i] === input) {
        alert("Value Already Exist");
        return false;
      }
    }
    if (name === "") {
      alert("Input Empty ! please fill");
      return false;
    } else {
      setList([...list, input]);
      setInput("");
    }
  };
  const handleUpdate = (e) => {
    if (input === "") {
      alert("Name must be filled out");
      return false;
    } else {
      list.splice(update, 1, input);
      setInput("");
      btnUpdate("");
      // e.preventDefault();
    }
  };
  const handleDelete = (i) => {
    var alertMessage = window.confirm("are you sure to delete");
    if (alertMessage) {
      const filterList = list.filter((element, index) => index !== i);
      //console.log("filterList", filterList);
      setList(filterList);
    }
  };
  const handleEdit = (i) => {
    // const filterList = list.filter((element) => element === list[i]);
    console.log(i);
    const filterList = list.filter((p, index) => index === i);
    console.log (filterList);
    setInput(filterList[0]);
    setUpdate(i);
    btnUpdate(true);

    //setList(filterList)
  };

  const onSubmit = e => {
    e.preventDefault()
    if (btn) {
      handleUpdate()
    } else {
      handleTask()
    }
  
  }
  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <input
              className="inputfield"
              type="text"
              id="name"
              value={input}
              onChange={(e) => handleInput(e)}
            />
            {btn ? (
              <button
                type="button"
                className="updateBtn"
                onClick={handleUpdate}
              >
                <GrUpdate />
              </button>
            ) : (
              <button type="button" className="addBtn" onClick={handleTask}>
                <MdAddTask />
              </button>
            )}
          </div>
        </form>
        <div className="list">
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                {item}
                <button className="DeleteBtn" onClick={() => handleDelete(i)}>
                  <TbTrashXFilled />
                </button>
                <button className="EditBtn" onClick={() => handleEdit(i)}>
                  <FaEdit />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CRUD;
