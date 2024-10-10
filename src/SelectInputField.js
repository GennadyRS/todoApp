import React,{useState} from 'react'

    export default function SelectInputField({p,onChange,tasks,setTable,options,handleClick,evnt,elem}){
      let tsks = tasks.slice();
      const [isEdit,setIsEdit]=useState(false);
      let value = tsks;
        for(let i in p){
          value = value[p[i]];
        }
        if(isEdit){
      }
      return (!isEdit
      ? <div  className="txtInpFld" onClick={()=>{setIsEdit(true)}}>{elem}</div>
      : <div><select value={value}
        className="selIF"
        onChange={(e)=>{
        onChange(e);
        setIsEdit(false);
        handleClick(evnt)
        }}
        onBlur={()=>setIsEdit(false)}
        autoFocus >
          {options}
        </select></div>
      )
    }
