import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';


const ToDo = ({todo, handleToggle, removeTask}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
      <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}>
      <div key={todo.id}>
       <h3  onClick={handleClick}  className={todo.complete ? "todo strike" : "todo"}> {todo.task}</h3>    
            <button onClick={handleClick} id={todo.id}  value={todo.id}>Completed</button>
            <button style={{ margin: "20px" }} onClick={removeTask} id={todo.id}  value={todo.id}>
        Clear Completed
      </button> 
       </div>
    </Draggable>
        
    );
};

export default ToDo;