import React, { useState } from 'react';
import '../App.css';


function Todo() {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [editItems, setEditItems] = useState(null);
    



    const inputItem = (event) => {
        setInputData(event.target.value);

    }
    const addItem = () => {
        if (!inputData) {
            alert("plzz fill date");
        } else if (inputData && !toggle) {
            setItems(
                items.map((elem) => {
                    if (elem.id == editItems) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggle(true);
            setInputData('');
            setEditItems(null);

        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData, ischecked: false }
            setItems([...items, allInputData]);
            setInputData("");
        }

    }

    const deleteItems = (index) => {
        const deleteElem = items.filter((elem) => {
            return (
                index !== elem.id
            )
        })
        setItems(deleteElem)
    }
    const editItem = (id) => {
        let newEditItems = items.find((elem) => {
            return (
                elem.id === id
            )
        });
        // console.log(newEditItem);
        setToggle(false);
        setInputData(newEditItems.name);
        setEditItems(id);



    }
    const handleClick = (id) => {
        const newItems = items.map((elem) => {
            if (elem.id === id) {
                return { ...elem, ischecked: !elem.ischecked }
            }
            return elem
        })
        setItems(newItems)
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <h3>ADD ITEMS</h3><hr />
                    <div className="add-item">
                        <input type="text " value={inputData} onChange={inputItem} />

                        {
                            toggle ? <button title="Add item" onClick={addItem}>Add</button>
                                : <button title="Add item" onClick={addItem}>Update</button>
                        }


                    </div>
                    <h3>TODO</h3><hr />

                    <div className="show-item">

                        {

                            items.map((elem) => {
                                if (elem.ischecked === false) {
                                    return (
                                        <>
                                            <div className="each-item" key={elem.id} style={{ display: "flex", justifyContent: "space-between" }}>

                                                <ol style={elem.ischecked ? { textDecoration: "line-through" } : null}><input type="checkbox" checked={elem.ischecked} onChange={(e) => handleClick(elem.id)} />{elem.name}</ol>
                                                

                                                <div className="todo-btn" style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between"
                                                }}>
                                                    <button className="Edit-item" onClick={() => { editItem(elem.id) }}>Edit</button>

                                                    <button className="Delete-item" onClick={() => { deleteItems(elem.id) }}>Delete</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </>


                                    )
                                } else {
                                    return null
                                }
                            }
                            )
                        }

                        <h3>Completed</h3><hr />
                        {

                            items.map((elem) => {
                                if (elem.ischecked === true) {
                                    return (
                                        <>
                                            <div className="each-item" key={elem.id} style={{ display: "flex", justifyContent: "space-between" }}>

                                                <ol style={elem.ischecked ? { textDecoration: "line-through" } : null}><input type="checkbox" checked={elem.ischecked} onChange={(e) => handleClick(elem.id)} />{elem.name}</ol>


                                                <div className="todo-btn" style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    height:"100%",
                                                    justifyContent: "space-between"
                                                }}>
                                                    <button className="Edit-item" onClick={() => { editItem(elem.id) }}>Edit</button>

                                                    <button className="Delete-item" onClick={() => { deleteItems(elem.id) }}>Delete</button><hr />
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                } else {
                                    return null
                                }
                            }
                            )
                        }



                    </div>
                </div>

            </div>
        </>

    );
}

export default Todo;
