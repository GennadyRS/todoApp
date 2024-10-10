import {Column} from './Column'
import {TaskCell} from './Column'
import Cell from './Column'
import {rand} from './App'


    export default function Table({tasks,handleClick,handleTaskClick,setTable}){
      let dragged = {}
      function handleDragStart(event) {
        dragged.i = event.target.attributes.i.value;
        dragged.j = event.target.attributes.j.value;
      }
        
      function handleDrop(event) {
        let el = event.target
          while(el.className!=="column"){
            el = el.parentNode
          }
        let newTasks = tasks.slice();
        if(el.attributes.status.value === "complete") {var newValue1 = new Date().toLocaleDateString('ru');}
        let newValue = el.attributes.status.value;
        let actions = [[[dragged.i,"subTasks",dragged.j,"status"],newValue],[[dragged.i,"subTasks",dragged.j,"date2"],newValue1]];
        setTable(newTasks,actions);
      }
        
      function handleDragOver(event) {
        event.preventDefault();
      }
          
      function handleDragEnter(event) {
        if(event.target.className === "cell"){
          }else{
        }
      }
          
      function handleDragLeave(event) {
      }
          
         let mainTask = [];
         let queued = [];
         let emergency = [];
         let inProgress = [];
         let testing = [];
         let complete = [];
         
             tasks.map( (task,i) => {
               const color = task.color;
               if(task.status==="task"){
                 mainTask.push(
                 <div key={"task"+i}>
                 <TaskCell task={task} i={i} handleTaskClick={handleTaskClick} />
                 </div>
                 )
               }
             task.subTasks.map( (subtask,j) => {
               if(subtask){
               if(subtask.status==="queued"){
                 queued.push(
                 <Cell task={subtask} key={i+""+j} i={i} j={j} color={color} handleClick={handleClick} handleDragStart={handleDragStart} />
                 )
               }
               if(subtask.status==="emergency"){
                 emergency.push(
                 <Cell key={i+""+j} task={subtask} i={i} j={j} color={color} handleClick={handleClick} handleDragStart={handleDragStart} />
                 )
               }
               if(subtask.status==="inProgress"){
                 inProgress.push(
                 <Cell task={subtask} key={i+""+j} i={i} j={j} color={color} handleClick={handleClick} handleDragStart={handleDragStart} />
                 )
               }
               if(subtask.status==="testing"){
                 testing.push(
                 <Cell key={i+""+j} task={subtask} i={i} j={j} color={color} handleClick={handleClick} handleDragStart={handleDragStart} />
                 )
               }
               if(subtask.status==="complete"){
                 complete.push(
                 <Cell task={subtask} key={i+""+j} i={i} j={j} color={color} handleClick={handleClick} handleDragStart={handleDragStart} />
                 )
               }
               }
               return j ;
             })
               return i ;
             })
             
      return(
        <div className="table">

        <div className="tableHeader">
        <div className="cell_header">
        <div  style={{transform:"rotate("+((rand[0]-0.5)*5)+"deg)"}}><b>Задачи</b></div>
        </div>
        <div className="cell_header">
        <div  style={{transform:"rotate("+((rand[1]-0.5)*5)+"deg)"}}><b>В очереди</b></div>
        </div>
        
        <div className="cell_header">
        <div style={{transform:"rotate("+((rand[2]-0.5)*5)+"deg)"}}><b style={{background:"red",color:"white"}}>Срочные</b></div>
        </div>
        
        <div className="cell_header">
        <div  style={{transform:"rotate("+((rand[3]-0.5)*10)+"deg)"}}><b>Выполняются</b></div>
        </div>
        
        <div className="cell_header">
        <div style={{transform:"rotate("+((rand[4]-0.5)*5)+"deg)"}}><b>Тестируются</b></div>
        </div>
        
        <div className="cell_header">
        <div style={{transform:"rotate("+((rand[5]-0.5)*5)+"deg)"}}><b>Выполнены</b></div>
        </div>
           
        </div>
           
        <div className="columns">
        
        <Column status={"task"} data={mainTask} />
        
        <Column status={"queued"} handleDrop={handleDrop} handleDragOver={handleDragOver} handleDragEnter={handleDragEnter}
        handleDragLeave={handleDragLeave} data={queued} />
        
        <Column status={"emergency"} data={emergency} handleDrop={handleDrop} handleDragOver={handleDragOver} />
        
        <Column status={"inProgress"} handleDrop={handleDrop} handleDragOver={handleDragOver} handleDragEnter={handleDragEnter}
        handleDragLeave={handleDragLeave} data={inProgress} />
        
        <Column status={"testing"} data={testing} handleDrop={handleDrop} handleDragOver={handleDragOver} />
        
        <Column status={"complete"} handleDrop={handleDrop} handleDragOver={handleDragOver} handleDragEnter={handleDragEnter}
        handleDragLeave={handleDragLeave} data={complete} />
           
        </div>
           
        </div>
      )
    }
