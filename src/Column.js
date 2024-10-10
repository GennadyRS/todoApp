import {rand} from './App'

    export function Column({status,handleDrop,handleDragOver,handleDragEnter,handleDragLeave,data}){
     
      return(
        <div className="column"
          status={status}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}>
          {data}
        </div>
      )
    }
    
    export function TaskCell({task,i,handleTaskClick}){
      let rnd = rand[i];
      let rnd1 = rand[i+1];
      return(
        <div  
          className="taskCell" 
          i={i}
          style={{width:90+"%",left:5-5*rnd+"px",transform:"rotate("+((rnd1-0.5)*5)+"deg)"}}
          onClick={handleTaskClick}>
          <b>{task.name} </b><b style={{color:task.color,background:task.color}}>&nbsp;</b>
        </div>
      )
    }
      
    function Cell({ task,handleClick,color,handleDragStart,i,j }){
      let rnd = rand[6+i*2+j];
      let rnd1 = rand[6+i*2+j+1];
     
      return(
        <div
          id={"id"+i}
          className="cell"
          status={task.status}
          i={i}
          j={j}
          style={{left:10-10*rnd+"%",transform:"rotate("+((rnd1-0.5)*5)+"deg)"}}
          draggable={true}
          onClick = {handleClick}
          onDragStart = {handleDragStart}
          >
          {task.name} <b style={{color:color,background:color}}>&nbsp;</b>
        </div>
      )
    }
    
    
        export default Cell;
