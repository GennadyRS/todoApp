import Comments from './Comments'
import Table from './Table'
import React, { useState } from 'react'
import initTasks from './initData'
import SubtaskField from './SubtaskField'
import TextInputField from './TextInputField'
import SelectInputField from './SelectInputField'
import Panel from './Panel'
import Left from './Arrows'
import {Right} from './Arrows'
import {showPanel} from './Panel'

    let astck = localStorage.getItem('astack');
    let stck = localStorage.getItem('stack');
    let storedTasks = localStorage.getItem('tasks');
    let stack;
    export let astack;
    if(!stck) stack = [];
    if(!astck) astack=[];
    if(stck) stack = stck.split('localStorage');
    if(astck) astack = astck.split('localStorage');
    
    export function TaskList(){
      let stored;
      if(storedTasks){stored=JSON.parse(storedTasks);}else{stored=initTasks;}
      const [tasks, setTasks] = useState(stored);
      const [cover, setCover] = useState(false);
      
        function Cover({cover}){
          let vis;
          if(!cover){vis='hidden'}
          if(cover){vis='visible'}
          return <div className="cover" style={{visibility:vis}}></div>
        }
      
        function handleTaskClick(event){
          let el = event.target;
            while(el.className!=="taskCell"){
              el = el.parentNode;
            }
          let i = el.attributes.i.value;
          let element = tasks[i];
            let tasksNames = element.subTasks.map((task,n)=>{
              return <SubtaskField p={[i,"subTasks"]}
                key={n}
                task={n}
                setTable={setTable}
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                evnt={event}
              />;
            })
            let form = <React.Fragment>
              {element.id}
              <TextInputField p = {[i,"name"]}
                onBlur = { (e) => {
                  let actions = [[ [i,"name"], e.target.value, ]];
                  setTable(tasks,actions);
                }}
              tasks={tasks} setTable={setTable} />
              <div className="group">
                <TextInputField p = {[i,"desc"]}
                  onBlur = { (e) => {
                    let actions = [[ [i,"desc"], e.target.value, ]];
                    setTable(tasks,actions);
                }}
                tasks={tasks} setTable={setTable} />
                <div className="cellGroup">
                  <div className="txtFld">Список подзадач
                    <input type="button"
                    style={{position:'absolute', right:1+"em"}}
                    taskname={el.attributes.i.value}
                    className="taskCreator" 
                    onClick={handleTaskCreate}
                    value="+" title="Добавить подзадачу"
                    />
                  </div>
                  <div className="subTasks">{tasksNames}</div>
                </div>
              </div>
              <br />
            <Comments commentData={element.comments}/>
          </React.Fragment>
          showPanel(form);
        }
      
        function handleClick(event){
          let el = event.target;
          let j = el.attributes.j.value;
          let i = el.attributes.i.value;
            while(el.className!=="cell"){
              el = el.parentNode;
            }
          let element = tasks[i].subTasks[j];
           
          let form = <React.Fragment>
            {element.id}
            <TextInputField p = {[i,"subTasks",j,"name"]}
            onBlur = { (e) => {
              let actions = [[ [i,"subTasks",j,"name"], e.target.value, ]];
              setTable(tasks,actions);
            }}
            tasks={tasks} setTable={setTable} />
            {"В очереди с "+element.date1}
            <SelectInputField p={[i,"subTasks",j,"status"]}
            onChange={function(event) {
              let actions = [[[i,"subTasks",j,"status"],event.target.value ],[[i,"subTasks",j,"date2"],new Date().toLocaleDateString('ru')]];
              setTable(tasks,actions);
            }}
            tasks={tasks} setTable={setTable} handleClick={handleClick} evnt={event}
            options = {[
              <option key="opt1" value="queued">В очереди</option>,
              <option key="opt2" value="emergency">Срочно</option>,
              <option key="opt3" value="inProgress">Выполняется</option>,
              <option key="opt4" value="testing">Тестировать</option>,
              <option key="opt5" value="complete">Выполнена</option>]}
              elem = {
            element.status === "complete" 
            ? "Выполнение завершено: "+element.date2 
            : element.status === "queued" 
            ? "В очереди"
            : element.status === "emergency"
            ? "Срочно"
            : element.status === "testing"
            ? "Тестируется"
            : element.status === "inProgress"
            ? "Выполняется" : ""
            } />
            <TextInputField p = {[i,"subTasks",j,"desc"]}
              onBlur = { (e) => {
                let actions = [[ [i,"subTasks",j,"desc"], e.target.value, ]];
                setTable(tasks,actions);
              }}
            tasks={tasks} setTable={setTable} />
            <Comments commentData={element.comments}/><br />
          </React.Fragment>
          showPanel(form);
        }
        
        function handleTaskCreate(event){
          let taskNumber = event.target.attributes.taskname.value;
          let visibility="visible";
          let newTask = {};
          newTask.id = "newid";
          newTask.prioritet = "prioritet";
          newTask.name = "name";
          newTask.desc = "description";
          newTask.date1 = new Date().toLocaleDateString('ru');
          newTask.date2 = "------";
          newTask.comments =  [ {id:"",author:"",text:"комментировать",comments:[]} ];
          newTask.status = "queued";
          let target={className:'taskCell',attributes:{i:{value:taskNumber}}}
          let e={target}
          let setNewTable = (task,actions) => {
            task[actions[0][0]]=actions[0][1];
          }
            let form = <React.Fragment>
            <div id="panel" className="hidden" style={{visibility}}>
              <div>Новая подзадача</div><br />
              <div>Приоритет</div>
              <TextInputField p={["prioritet"]} onBlur={(e)=>{newTask.prioritet = e.target.value;}} tasks={newTask} setTable={setNewTable} /><br />
              <div>Имя подзадачи</div>
              <TextInputField p={["name"]} onBlur={(e)=>{newTask.name = e.target.value;}} tasks={newTask} setTable={setNewTable} /><br />
              <div>Описание</div>
              <TextInputField p={["desc"]} onBlur={(e)=>{newTask.desc = e.target.value;}} tasks={newTask} setTable={setNewTable} /><br />
              <input type="button" className="button"
              onClick={ () => {
              let newTasks = tasks[taskNumber].subTasks.slice();
              newTasks.push(newTask);
              let subTasks = tasks[taskNumber]["subTasks"].slice();
              setTable(tasks.slice(), [[ [ taskNumber, "subTasks" ], newTasks, subTasks ]]);
              handleTaskClick(e);
              }}
              value="Сохранить" />
              <input type="button" className="closer" title="Закрыть" value="X"
              onClick={  ()=>{handleTaskClick(e)}} />
            </div></React.Fragment>
            showPanel(form);
        }
        
        function handleStack(event){
          if(event.target.id === 'arrowRight' && astack.length > 0) {
            stack.push(astack.pop());
          }
          let actions = JSON.parse(stack[stack.length-1]);
          if(event.target.id === 'arrowLeft' && stack.length > 0) {
            astack.push(stack.pop());
            for(let i in actions){
              let value = actions[i][1];
              actions[i][1] = actions[i][2];
              actions[i][2] = value;
            }
          }
          setCover(true);
          showAnimation(actions);
          setTimeout(
            ()=>{
              setTable1(tasks,actions);
              localStorage.setItem('astack', astack.join("localStorage"));
              localStorage.setItem('stack', stack.join("localStorage"));
              localStorage.setItem('tasks', JSON.stringify(tasks));
              setCover(false);
            }
            ,1000
          );
        }
        
        function setTable1(tasks,actions){
          const newTasks=tasks.slice();
          if(actions.length > 0){
            for(let i in actions){
              let arr = actions[i][0].slice();
              let a = newTasks;
              let field = arr.pop();
                for(let i in arr){
                  a = a[arr[i]];
                }
              actions[i][2]=a[field];
              a[field] = actions[i][1];
            }
          }
          setTasks(newTasks);
        }
        
        function setTable(tasks,actions){
          setTable1(tasks,actions);
          stack.push(JSON.stringify(actions));
          astack=[];
          localStorage.setItem('stack', stack.join("localStorage"));
          localStorage.removeItem('astack');
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      
        function showAnimation(actions){
          let inodes = document.querySelectorAll('[i]');
          let found=[];
          let fnd=[];
          let i=0;
          for(let el in inodes){
            if(inodes[el].attributes !== undefined && inodes[el].attributes.i.value === actions[0][0][0]){
              found[i] = inodes[el]; i++;
            }
          }
          fnd = found.filter(el=>{return el.attributes.j !== undefined && el.attributes.j.value === actions[0][0][2]});
          if(!fnd.length){
            fnd = found.filter(el=>{return el.attributes.j === undefined});
            fnd[0].className="taskCellBlink"
            setTimeout(()=>fnd[0].className="taskCell",1000);
          }else{
            fnd[0].className="cellBlink";
            setTimeout(()=>fnd[0].className="cell",1000);
          }
        }
      
      return(
        <div>
        <Cover cover={cover}/>
        <Panel form={false}/>
        <Table tasks={tasks} handleClick={handleClick} handleTaskClick={handleTaskClick} setTable={setTable}/>
        <Left handleStack={handleStack}/>
        <Right handleStack={handleStack}/>
        </div>
      )
    }
  export default stack
