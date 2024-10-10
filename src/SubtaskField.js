    export default function SubtaskField({p,task,setTable,tasks,handleTaskClick,evnt}){
      let bckgrnd;
      if(task/2-Math.floor(task/2)) {bckgrnd="rgba(0,128,0,.2)"}else{bckgrnd="rgba(128,0,0,.2)"}
      return   tasks[p[0]][p[1]][task] && <div className="subTask"
        style={{background:bckgrnd}}>
        {tasks[p[0]][p[1]][task].name}
          <input type="button"
            title={"Удалить подзадачу "+tasks[p[0]][p[1]][task].name}
            className="subTaskRemover"
            value="x"
              onClick={ () => {
                if(window.confirm("Удалить подзадачу " + tasks[p[0]][p[1]][task].name + " ?")){
                  let tsks = tasks[p[0]][p[1]].slice();
                  tsks[task]=null;
                  setTable(tasks,[[p,tsks]]);
                  handleTaskClick(evnt);
                }
              }
          }/>
      </div>
    }
