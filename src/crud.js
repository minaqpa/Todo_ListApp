import React, { useRef, useState } from "react";
import "./crud.css";
import { MdAddTask } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

function Crud() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [updateIndex, setUpdateIndex] = useState();
  const [btn, btnUpdate] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  // Add task
  const addTask = (e) => {
    // e.preventDefault();
    // use input or inputValue
    var name = document.getElementById("name").value;
    // const input = inputValue.trim()
    for (var i = 0; i < list.length; i++) {
      // console.log(list);
      if (list[i] === inputValue) {
        alert("Value Already Exist");
        return false;
      }
    }
    if (name === "") {
      alert("Input Empty ! please fill");
      return false;
    } else {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };
  const handleUpdate = (e) => {
    for (var i = 0; i < list.length; i++) {
      // console.log(list);
      if (list[i] === inputValue) {
        alert("Value Already Exist");
        return false;
      }
    }
    if (inputValue === "") {
      alert("Input Empty ! please fill");
      return false;
    } else {
      list.splice(updateIndex, 1, inputValue);
      setInputValue("");
      // btnUpdate should pass boolean value i.e false
      // btnUpdate("");
      btnUpdate(false);
      // e.preventDefault(  );
    }
  };
  const handleDelete = (i) => {
    var alertMessage = window.confirm("are you sure to delete");
    if (alertMessage) {
      const filterList = list.filter((element, index) => index !==  i);
   
      console.log("filterList", filterList);
      setList(filterList);
    }
  };
  const handleEdit = (i) => {
    // const filterList = list.filter((element) => element === list[i]);
    // console.log(i);
    const filterList = list.filter((p, index) => index === i);
    console.log (filterList);
    setInputValue(filterList[0]);
    setUpdateIndex(i);
    btnUpdate(true);

    //setList(filterList)
  };

  const onSubmit = e => {
    e.preventDefault()
    if (btn) {
      handleUpdate()
    } else {
      addTask()
    }
  
  }

  console.log('update', updateIndex)
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
              value={inputValue}
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
              <button type="button" className="addBtn" onClick={addTask}>
                <MdAddTask />
              </button>
            )}
          </div>
        </form>
        <div className="list">
          <ul>
            {list.map((item, i) => 
              <li key={i}>
                {item}
                <button className="DeleteBtn" onClick={() => handleDelete(i)}>
                  <TbTrashXFilled />
                </button>
                <button className="EditBtn" onClick={() => handleEdit(i)}>
                  <FaEdit />
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Crud;
