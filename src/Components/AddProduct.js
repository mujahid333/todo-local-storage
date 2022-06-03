import React from "react";
import { useState, useEffect } from "react";

export const AddProduct = () => {
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [todo, setTodo] = useState([]);
  const [local, setLocal] = useState([]);
  const [set, setSet] = useState(false);
  const [btn, setDell] = useState("Add product");
  const [key, setkey] = useState(false);
  const [position, setPosition] = useState("");

  useEffect(() => {
    if (todo.length !== 0 || set) {
      localStorage.setItem("todos", JSON.stringify(todo));
    }
    let datavalue = JSON.parse(localStorage.getItem("todos"));
    datavalue ? setLocal(datavalue) : setLocal([]);
  }, [todo, set]);

  function Submit(e) {
    e.preventDefault();

    if (pname && price !== "") {
      if (!set) {
        setTodo([
          ...local,
          {
            name: pname,
            price: price,
          },
        ]);
      } else {
        local[key] = { name: pname, price: price };
        setTodo(local);
      }

      setPname("");
      setPrice("");
      setSet(true);
    } else {
      alert("please fill all field care fully");
    }
  }
  function dellitem(data) {
    local.splice(data, 1);
    setSet(true);
    setTodo(local);
  }
  function edititem(key) {
    const editvalue = local[key];
    setPname(editvalue.name);
    setPrice(editvalue.price);
    setkey(key);
    setSet(true);
    setDell("Update Product");
  }

  function updown(key) {
    if (position === "up") {
      if (key !== 0) {
        const keyup = key - 1;
        //   console.log(keyup)
        const downval = local[keyup];
        local[keyup] = local[key];
        local[key] = downval;
        setTodo(local);
      } else {
        alert("cant perform this type of action");
      }
    }
    if (position === "down") {
      if (key !== local.length - 1) {
        // console.log(key , local.length);
        const keydown = key + 1;
        const upval = local[keydown];
        local[keydown] = local[key];
        local[key] = upval;
        setTodo(local);
      } else {
        alert("cant perform this type of action");
      }
    }
  }

  return (
    <>
      <div className="add-form">
        <h2>Add Product</h2>

        <form onSubmit={Submit}>
          <label htmlFor="product">Product Name</label>
          <br></br>
          <input
            type="text"
            id="product"
            value={pname}
            onChange={(e) => {
              setPname(e.target.value);
            }}
            placeholder="product name"
          ></input>
          <br></br>
          <label htmlFor="price">Product price</label>
          <br></br>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="product price"
          ></input>
          <br></br>
          <div className="submit-btn">
            <button type="submit">{btn}</button>
          </div>
        </form>
      </div>
      <table id="customers">
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Action</th>
        </tr>

        {local.map((item, key) => (
          <tr key={key}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button
                className="dell-btn"
                onClick={() => {
                  dellitem(key);
                }}
              >
                Dell
              </button>
              <button
                className="edit-btn"
                onClick={() => {
                  edititem(key);
                }}
              >
                Edit
              </button>
              <button
                className="dell-btn"
                onClick={() => {
                  updown(key, setPosition("up"));
                }}
              >
                Up
              </button>
              <button
                className="edit-btn"
                onClick={() => {
                  updown(key, setPosition("down"));
                }}
              >
                Down{" "}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
