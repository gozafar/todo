import React from 'react';
import '../App.css';


function TodoList({elem,ischecked,handleClick,editItem,deleteItems}) {
  return (
    
    <>
                                            <div className="each-item" key={elem.id} style={{ display: "flex", justifyContent: "space-between" }}>

                                                <ol style={ischecked ? { textDecoration: "line-through" } : null}><input type="checkbox" checked={elem.ischecked} onChange={(e) => handleClick(elem.id)} />{elem.name}</ol>


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
  );
}

export default TodoList;
