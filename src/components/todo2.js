import React from 'react';
import '../App.css';



function Todo2 ({inputData,toggle,inputItem,addItem}) {
  return (
    <>
    <div>
         <input type="text " value={inputData} onChange={inputItem} />

                        {
                            toggle ? <button title="Add item" onClick={addItem}>Add</button>
                                : <button title="Add item" onClick={addItem}>Update</button>
                        }
    </div>
    </>
  );
}

export default Todo2;
